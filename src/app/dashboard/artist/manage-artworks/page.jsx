import React from 'react';
import DontHaveAnyArtworks from './DontHaveAnyArtworks';
import ArtworksTableContainer from './ArtworksTableContainer';
import { getUserSession } from '@/lib/core/session';
import { getArtworksByArtistId } from '@/lib/api/artwork';


const ManageArtworksPage = async () => {
    const user = await getUserSession();
    const artworks = await getArtworksByArtistId(user?.id);

    return (
        <div className='space-y-4'>
            <div className="flex flex-col gap-1 text-[#D8A33D]">
                <h2 className="text-2xl font-semibold">Manage Your Artworks</h2>
                <p className="text-sm text-[#866c3c]">View, Edit and Delete your artworks</p>
            </div>

            {
                artworks.length === 0 ? <DontHaveAnyArtworks /> : <>
                    <ArtworksTableContainer artworks={artworks} />
                </>
            }
        </div>
    );
};

export default ManageArtworksPage;