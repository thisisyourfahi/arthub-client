import DashboardStats from '@/components/dashboard/DashboardStats';
import { getArtworks } from '@/lib/api/artwork';
import { getAllArtists, getAllUsers } from '@/lib/api/user';
import { CircleDollar, PersonPencil, Persons, Picture } from '@gravity-ui/icons';
import React from 'react';

const parsePrice = (price) => parseFloat(price) || 0;

const AdminDashboard = async () => {
    const allUsers = await getAllUsers();
    const allArtist = await getAllArtists();
    const allArtworks = await getArtworks();
    const marketplaceWorth = allArtworks.reduce(
        (sum, artwork) => sum + parsePrice(artwork?.price), 0
    )

    const stats = [
        { title: 'Total Users', value: allUsers?.length, icon: Persons },
        { title: 'Total Artists', value: allArtist.length, icon: PersonPencil },
        { title: 'Total Artworks', value: allArtworks?.length, icon: Picture },
        { title: 'Marketplace Worth', value: parseInt(marketplaceWorth), icon: CircleDollar }
    ]

    return (
        <div className='space-y-8'>
            <div className='text-[#D8A33D]'>
                <h1 className="text-2xl font-semibold">
                    Welcome back, Admin
                </h1>
                <p className="text-[#866c3c] text-sm">
                    Here&apos;s a quick look at ArtHub, users, artwork, and total worth.
                </p>
            </div>

            <DashboardStats stats={stats} />
        </div>
    );
};

export default AdminDashboard;