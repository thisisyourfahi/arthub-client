'use client'
import React, { useEffect, useState } from 'react';
import ArtCard from './ArtCard';
import ArtworkFilters from './ArtworkFilters';
import { useRouter } from 'next/navigation';
import NoArts from './NoArts';

const ArtworkListingContainer = ({ initialArts, filters }) => {
    const [category, setCategory] = useState(filters?.category || 'all');
    const [searchQuery, setSearchQuery] = useState(filters?.search || '');
    const [sort, setSort] = useState( filters?.sort|| 'default');
    const router = useRouter();
    const filteredArts = [...initialArts];

    useEffect(() => {
        const queryParams = new URLSearchParams();
        if (searchQuery) {
            queryParams.set('search', searchQuery);
        }
        if (category !== 'all') {
            queryParams.set('category', category);
        }
        if (sort !== 'default') {
            queryParams.set('sort', sort);
        }
        const path = `?${queryParams.toString()}`;
        router.push(path);
    }, [category, searchQuery, sort, router]);

    return (
        <div className='space-y-8'>
            <div className="max-w-7xl mx-auto mb-6 text-sm text-[#866c3c]">
                Showing {filteredArts.length} art{filteredArts.length !== 1 && "s"}
            </div>

            <ArtworkFilters category={category} searchQuery={searchQuery} setCategory={setCategory} setSearchQuery={setSearchQuery} sort={sort} setSort={setSort} />

            {filteredArts.length === 0 ? <NoArts /> :
                < div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {filteredArts.map((art) => (
                        <ArtCard
                            key={art._id?.$oid || art._id}
                            art={art}
                        />
                    ))}
                </div>
            }
        </div >
    );
};

export default ArtworkListingContainer;