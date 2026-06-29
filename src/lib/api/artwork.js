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

export async function  getRandomArtworks(artworks, count = 5) {
    const shuffled = [...artworks];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = crypto.getRandomValues(new Uint32Array(1))[0] % (i + 1);

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, count);
}