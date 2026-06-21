'use server'

import { serverMutation } from "../core/server"

export const addArtwork = async (data) => {
    return serverMutation('/api/artworks', data)
}