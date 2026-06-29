import { getArtworkById } from '@/lib/api/artwork';
import { getUserSession } from '@/lib/core/session';
import React from 'react';
import BoughtArtworks from './BoughtArtworks';

const UserBoughtArtworksPage = async () => {
    const { purchaseArtworksId } = await getUserSession();
    const artworks = await Promise.all(
        purchaseArtworksId.map(async (id) => {
            const artwork = await getArtworkById(id);
            return artwork;
        })
    )
    return (
        <div>
            <BoughtArtworks artworks={artworks} />
        </div>
    );
};

export default UserBoughtArtworksPage;