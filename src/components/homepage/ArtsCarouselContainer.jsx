import { getArtworks } from '@/lib/api/artwork';
import React from 'react';
import ArtsCarousel from './ArtsCarousel';

const ArtsCarouselContainer = async () => {
    const artworks = await getArtworks();
    // select the last 5 artworks from the array
    const arts = artworks.slice(Math.max(artworks.length - 5, 0));

    return (
        <div className='flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center px-4 md:px-0'>
            <div className='lg:w-sm'>
                <h2 className="text-2xl font-bold text-[#D8A33D]">Latest Artworks</h2>
                <p className="text-[#6e5018] line-clamp-2">
                    Fresh pieces from our artists — explore styles, find something you love, and take it home.
                </p>
            </div>
            <ArtsCarousel artworks={arts} ></ArtsCarousel>
        </div>
    );
};

export default ArtsCarouselContainer;