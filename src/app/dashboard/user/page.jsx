import DashboardStats from '@/components/dashboard/DashboardStats';
import { getArtworkById } from '@/lib/api/artwork';
import { getUserSession } from '@/lib/core/session';
import { Calendar, CircleDollar, SquareHashtag, Star } from '@gravity-ui/icons';
import React from 'react';

const parsePrice = (price) => parseFloat(price) || 0;

const UserDashboardPage = async () => {
    const user = await getUserSession();
    const purchasedArtworks = await Promise.all(
        user?.purchaseArtworksId.map(async (id) => {
            const artwork = await getArtworkById(id);
            return artwork;
        })
    )
    const totalSpent = purchasedArtworks.reduce(
        (sum, artwork) => sum + parsePrice(artwork.price), 0
    )
    const memberSince = new Date(user?.createdAt).toLocaleDateString('en-US');

    const stats = [
        { title: 'Purchased Artworks', value: user?.purchaseArtworksId.length, icon: SquareHashtag },
        { title: 'Total Spent', value: totalSpent, icon: CircleDollar },
        { title: 'Current Plan', value: user?.plan, icon: Star}, 
        { title: 'Member Since', value: memberSince, icon: Calendar}
    ]

    return (
        <div className='space-y-8'>
            <div>
                <h2 className='text-2xl text-[#d8a33d] font-semibold'>Welcome back, {user?.name}</h2>
                <p className='text-[#6e5018]'>Have a quick look at your activity with ArtHub</p>
            </div>

            <DashboardStats stats={stats} />
        </div>
    );
};

export default UserDashboardPage;