import { getArtworkById } from '@/lib/api/artwork';
import React from 'react';
import ArtDetails from './ArtDetails';
import { getUserById } from '@/lib/api/user';
import Purchase from './Purchase';
import { getUserSession } from '@/lib/core/session';

const ArtDetailsPage = async ({params}) => {
    const {id} = await params;
    const art = await getArtworkById(id);
    const artist = await getUserById(art.artistId);
    const user = await getUserSession();
    return (
        <div className='space-y-4'>
            <Purchase art={art} artist={artist} user={user} />
            <ArtDetails art={art} artist={artist} />
        </div>
    );
};

export default ArtDetailsPage;