'use server'

import { serverFetch } from "../core/server"

export const getAllUsers = async () => {
    return serverFetch(`/api/users`);
}

export const getUserById = async (Id) => {
    return serverFetch(`/api/users?Id=${Id}`);
}

export const getAllArtists = async() => {
    return serverFetch('/api/users?role=artist');
}

export const getUsersPurchaseHistory = async (id) => {
    return serverFetch(`/api/purchase?bueryId=${id}`)
}