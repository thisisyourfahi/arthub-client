import { getArtworkById } from '@/lib/api/artwork';
import React from 'react';
import ArtDetails from './ArtDetails';
import { getUserById } from '@/lib/api/user';
import Purchase from './Purchase';
import { getUserSession } from '@/lib/core/session';
import SubscriptionDetails from '@/components/arts/SubscriptionDetails';

const maximumPurchase = {
    'arthub_free': 3,
    'arthub_pro': 9,
    'arthub_premium': 1000
}

const ArtDetailsPage = async ({ params }) => {
    const { id } = await params;
    const art = await getArtworkById(id);
    const artist = await getUserById(art.artistId);
    const user = await getUserSession();
    const reachedPurchaseLimit = user ? user?.purchaseArtworksId.length >= maximumPurchase[user?.plan] : false;
    return (
        <div className='space-y-4'>
            <div className='space-y-4'>
                {user && <SubscriptionDetails maxPurchase={maximumPurchase[user?.plan]} plan={user?.plan}  alreadyPurchasedCount={user?.purchaseArtworksId.length}/> }
                <Purchase art={art} artist={artist} user={user} reachedPurchaseLimit={reachedPurchaseLimit} />
            </div>

            <ArtDetails art={art} artist={artist} />
        </div>
    );
};

export default ArtDetailsPage;