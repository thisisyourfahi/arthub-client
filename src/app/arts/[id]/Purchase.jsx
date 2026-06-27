import { TrashBin } from '@gravity-ui/icons';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const Purchase = ({ user, artist, art }) => {
    const { imageUrl, title, category, price  } = art
    return (
        <Card className='p-6 text-[#D8A33D] flex flex-row items-center justify-between'>
            <div className="flex gap-3">
                <Image width={80} height={80} src={imageUrl} alt="Artwork preview" className="rounded-md object-cover" />
                <div>
                    <h2 className='text-xl font-bold'>{title}</h2>
                    <p>{category}</p>
                    <p>By <strong>{artist.name}</strong></p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <p className='text-xl font-semibold'>${price}</p>
                <Button className={'bg-[#D8A33D]'} isDisabled={user?.id === artist?._id || !user}>
                    Buy Now
                </Button>
            </div>
        </Card>
    );
};

export default Purchase;