import { getArtworkById, getArtworks } from '@/lib/api/artwork';
import React from 'react';
import AllArtworksTableContainer from './AllArtworksTableContainer';
import { getUserById } from '@/lib/api/user';

const AdminManageArtworks = async () => {
    const allArtworks = await getArtworks();
    // console.log(allArtworks);
    const allArtworksInfo = await Promise.all(
        allArtworks.map(async (art) => {
            const artist = await getUserById(art?.artistId);
            return {
                ...art, 
                artist
            }
        })
    )
    console.log(allArtworksInfo);
    return (
        <div>
            <p>manage-artworks</p>
            <AllArtworksTableContainer allArtworks={allArtworksInfo} />
        </div>
    );
};

export default AdminManageArtworks;