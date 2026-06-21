import React from 'react';
import ArtCard from './ArtCard';

const ArtworkListingContainer = ({ initialArts }) => {
    return (
        <div>
            <div className="max-w-7xl mx-auto mb-6 text-sm text-[#866c3c]">
                Showing {initialArts.length} art{initialArts.length !== 1 && "s"}
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {initialArts.map((art) => (
                    <ArtCard
                        key={art._id?.$oid || art._id}
                        art={art}
                    />
                ))}
            </div>
        </div>
    );
};

export default ArtworkListingContainer;