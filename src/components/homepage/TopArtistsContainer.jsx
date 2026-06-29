import { getArtworksByArtistId } from '@/lib/api/artwork';
import { getAllArtists } from '@/lib/api/user';
import React from 'react';
import TopArtists from './TopArtists';

const TopArtistsContainer = async () => {
    const artists = await getAllArtists();    
    const artistsWithArtworksCount = await Promise.all(
        artists.map(async (artist) => {
            const artworks = await getArtworksByArtistId(artist._id);
            return {
                ...artist, 
                numberOfArtworks: artworks.length
            }
        })
    )

    const topArtists = artistsWithArtworksCount.sort((a, b) => b.numberOfArtworks - a.numberOfArtworks).slice(0, 3);

    return (
        <div>
            <TopArtists topArtists={topArtists} />
        </div>
    );
};

export default TopArtistsContainer;