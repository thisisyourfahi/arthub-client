import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const Purchase = ({ user, artist, art, reachedPurchaseLimit }) => {
    const { imageUrl, title, category, price } = art
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
                <form action='/api/checkout_sessions' method='POST'>
                    <input type='hidden' name='type' value={'artwork'}/>
                    <input type='hidden' name='artwork_id' value={art._id}></input>
                    <Button type='submit' className={'bg-[#D8A33D]'} isDisabled={user?.id === artist?._id || !user || art?.status !== 'Available' || reachedPurchaseLimit}>
                        Buy Now
                    </Button>
                </form>
            </div>
        </Card>
    );
};

export default Purchase;