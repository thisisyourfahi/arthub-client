import { getArtworkById } from '@/lib/api/artwork';
import React from 'react';
import ArtDetails from './ArtDetails';
import { getUserById } from '@/lib/api/user';

const ArtDetailsPage = async ({params}) => {
    const {id} = await params;
    const art = await getArtworkById(id);
    const artist = await getUserById(art.artistId);
    return (
        <div>
            <ArtDetails art={art} artist={artist} />
        </div>
    );
};

export default ArtDetailsPage;