import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

import { PLAN_PRICE_IDS, stripe } from '../../../lib/stripe'
import { getUserSession } from '@/lib/core/session'
import { toast } from '@heroui/react'

export async function POST(request) {
    try {
        const headersList = await headers()
        const origin = headersList.get('origin')

        const formData = await request.formData();
        const planId = formData.get('plan_id');
        const productId = PLAN_PRICE_IDS[planId];

        const user = await getUserSession();
        if (!user) {
            return NextResponse.json(
                { error: 'User not authenticated. Please Sign in and try again.' },
                { status: 401 }
            )
        }


        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
            customer_email: user?.email,
            line_items: [
                {
                    // Provide the exact Price ID (for example, price_1234) of the product you want to sell
                    price: productId,
                    quantity: 1,
                },
            ],
            mode: 'payment',
            metadata: {planId},
            success_url: `${origin}/pricing/success?session_id={CHECKOUT_SESSION_ID}`,
        });
        return NextResponse.redirect(session.url, 303)
    } catch (err) {
        return NextResponse.json(
            { error: err.message },
            { status: err.statusCode || 500 }
        )
    }
}