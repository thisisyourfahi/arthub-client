'use server'

import { serverFetch, serverMutation } from "../core/server"

export const addArtwork = async (data) => {
    return serverMutation('/api/artworks', data)
}

export const updateArtwork = async (id, data) => {
    return serverMutation(`/api/my/artworks/update/${id}`, data, 'PATCH');
}

export const deleteArtwork = async (id) => {
    return serverMutation(`/api/my/artworks/delete/${id}`, {}, 'DELETE');
}

export const purchaseArtwork = async (data) => {
    return serverMutation('/api/purchase', data);
}