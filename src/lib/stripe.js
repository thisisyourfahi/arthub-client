import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_IDS = {
    'arthub_pro': process.env.STRIPE_PRICE_ID_PRO,
    'arthub_premium': process.env.STRIPE_PRICE_ID_PREMIUM,
}

