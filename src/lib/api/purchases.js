'use server'

import { serverFetch } from "../core/server"

export const getAllPurchases = async () => {
    return serverFetch('/api/purchases');
}