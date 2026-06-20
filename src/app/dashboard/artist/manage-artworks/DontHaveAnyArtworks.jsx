import { CircleXmark, Plus } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const DontHaveAnyArtworks = () => {
    return (
        <div className="flex flex-col gap-1 text-[#D8A33D] bg-black p-4 rounded-md text-center space-y-2">
            <CircleXmark width={64} height={64} className='mx-auto text-[#D8A33D]' />
            <div>
                <h2 className="text-2xl font-semibold">No Artworks Added Yet</h2>
                <p className="text-sm text-[#866c3c]">
                    Your gallery is currently empty. Share your creativity by uploading your first masterpiece.
                </p>
            </div>
            <Link href={'/dashboard/artist/manage-artworks/add'}>
                <Button className={'bg-[#d8a33d]'}>
                    <Plus />
                    Add Artwork
                </Button>
            </Link>
        </div>
    );
};

export default DontHaveAnyArtworks;