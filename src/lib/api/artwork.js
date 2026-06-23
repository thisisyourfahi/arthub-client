'use server'

import { serverFetch } from "../core/server"

export const getArtworksByArtistId = async (artistId) => {
    return serverFetch(`/api/my/artworks/${artistId}`);
}

export const getArtworks = async (query = '') => {
    return serverFetch(`/api/artworks?${query}`);
}

export const getArtworkById = async (artId) => {
    return serverFetch(`/api/artworks?artId=${artId}`);
}