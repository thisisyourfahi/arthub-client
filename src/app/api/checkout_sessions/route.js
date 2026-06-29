import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

import { PLAN_PRICE_IDS, stripe } from '../../../lib/stripe'
import { getUserSession } from '@/lib/core/session'
import { getArtworkById } from '@/lib/api/artwork'

export async function POST(request) {
    try {
        const user = await getUserSession();
        if (!user) {
            return NextResponse.redirect(new URL('/redirect/log-in-first', request.url));
        }

        const headersList = await headers()
        const origin = headersList.get('origin')

        const formData = await request.formData();

        const type = formData.get('type');

        if (type === 'subscription') {
            const planId = formData.get('plan_id');
            const productId = PLAN_PRICE_IDS[planId];
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
                metadata: { 
                    type: 'subscription',
                    planId 
                },
                success_url: `${origin}/pricing/success?session_id={CHECKOUT_SESSION_ID}`,
            });
            return NextResponse.redirect(session.url, 303)
        }

        if (type === 'artwork') {
            const artworkId = formData.get('artwork_id');
            const artwork = await getArtworkById(artworkId);

            const session = await stripe.checkout.sessions.create({
                customer_email: user?.email,
                line_items: [
                    {
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: artwork?.title,
                                metadata: { artworkId: artwork?._id }
                            },
                            unit_amount: Math.round(artwork?.price * 100),
                        },
                        quantity: 1,
                    }
                ],
                mode: 'payment',
                metadata: {
                    type: 'artwork',
                    artworkId: artwork?._id,
                    buyerId: user?.id,
                    price: artwork?.price
                },
                success_url: `${origin}/arts/purchase/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${origin}/artworks/${artwork._id}`,
            })
            return NextResponse.redirect(session.url, 303)
        }

        // Create Checkout Sessions from body params.
        // const session = await stripe.checkout.sessions.create({
        //     customer_email: user?.email,
        //     line_items: [
        //         {
        //             // Provide the exact Price ID (for example, price_1234) of the product you want to sell
        //             price: productId,
        //             quantity: 1,
        //         },
        //     ],
        //     mode: 'payment',
        //     metadata: { planId },
        //     success_url: `${origin}/pricing/success?session_id={CHECKOUT_SESSION_ID}`,
        // });
        // return NextResponse.redirect(session.url, 303)
    } catch (err) {
        return NextResponse.json(
            { error: err.message },
            { status: err.statusCode || 500 }
        )
    }
}