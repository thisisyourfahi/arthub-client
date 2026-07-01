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
        <div className='space-y-8'>
            <div>
                <h2 className='text-2xl text-[#d8a33d]'>Manage All Artworks</h2>
                <p className='text-[#6e5018]'>Review the entire platform catalog, track pricing, and remove listings that violate guidelines.</p>
            </div>
            <AllArtworksTableContainer allArtworks={allArtworksInfo} />
        </div>
    );
};

export default AdminManageArtworks;