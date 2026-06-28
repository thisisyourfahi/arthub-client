'use server'

import { serverFetch } from "../core/server"

export const getUserById = async (Id) => {
    return serverFetch(`/api/users?Id=${Id}`);
}

export const getAllArtists = async() => {
    return serverFetch('/api/users?role=artist');
}