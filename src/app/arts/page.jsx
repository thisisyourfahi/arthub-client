import ArtworkListingContainer from '@/components/arts/ArtworkListingContainer';
import NoArts from '@/components/arts/NoArts';
import { getArtworks } from '@/lib/api/artwork';
import React from 'react';

const ArtsPage = async () => {
    const artworks = await getArtworks();

    return (
        <div className='space-y-4 max-w-7xl mx-auto'>
            <div className="flex flex-col gap-1 text-[#D8A33D]">
                <h2 className="text-2xl font-semibold">Browse Artworks</h2>
                <p className="text-sm text-[#866c3c]">Browse through the collection. Leave comments to encourage artists!</p>
            </div>

            {
                artworks.length === 0 ? <NoArts /> : <ArtworkListingContainer initialArts={artworks} />
            }
        </div>
    );
};

export default ArtsPage;