import React from 'react';
import AddArtworkForm from './AddArtworkForm';
import { getUserSession } from '@/lib/core/session';

const AddArtworkPage = async () => {
    const user = await getUserSession();
    return (
        <div className='space-y-4'>
            <div className="flex flex-col gap-1 text-center text-[#D8A33D]">
                <h2 className="text-2xl font-semibold">Add New Artwork</h2>
                <p className="text-sm">Fill in the details below to list a new piece in your gallery.</p>
            </div>
            <AddArtworkForm user={user}/>
        </div>
    );
};

export default AddArtworkPage;