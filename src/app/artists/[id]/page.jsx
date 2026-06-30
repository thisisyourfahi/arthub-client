import ArtistArtworks from '@/components/artistspage/ArtistArtworks';
import ArtistInfo from '@/components/artistspage/ArtistInfo';
import { getArtworksByArtistId } from '@/lib/api/artwork';
import { getUserById } from '@/lib/api/user';
import React from 'react';

const ArtistDetailsPage = async ({params}) => {
    const {id} = await params;
    const artistInfo = await getUserById(id);
    const artworks = await getArtworksByArtistId(artistInfo._id);
    return (
        <div className='max-w-7xl mx-auto'>
            <ArtistInfo user={artistInfo} numberOfArtworks={artworks?.length || 0}/>
            <ArtistArtworks artworks={artworks} />
        </div>
    );
};

export default ArtistDetailsPage;