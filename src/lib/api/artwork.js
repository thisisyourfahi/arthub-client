'use server'

import { serverFetch } from "../core/server"

export const getArtworksByArtistId = async (artistId) => {
    return serverFetch(`/api/my/artworks/${artistId}`);
}