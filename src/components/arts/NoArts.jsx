import { CircleXmark } from '@gravity-ui/icons';
import React from 'react';

const NoArts = () => {
    return (
        <div className="flex flex-col gap-1 text-[#D8A33D] bg-black p-4 rounded-md text-center space-y-2">
            <CircleXmark width={64} height={64} className='mx-auto text-[#D8A33D]' />
            <div>
                <h2 className="text-2xl font-semibold">No Artwork(s)</h2>
                <p className="text-sm text-[#866c3c]">No Artwork(s) has matched your search criteria. Try different keywords or categories.</p>
            </div>
        </div>
    );
};

export default NoArts;