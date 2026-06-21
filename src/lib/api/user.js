'use server'

import { serverFetch } from "../core/server"

export const getUserById = async (Id) => {
    return serverFetch(`/api/users?Id=${Id}`);
}