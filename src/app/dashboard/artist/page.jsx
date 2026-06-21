import { getArtworksByArtistId } from '@/lib/api/artwork';
import { getUserSession } from '@/lib/core/session';
import React from 'react';
import DashboardCard from './DashboardCard';

const ArtistDashboardPage = async () => {
    const user = await getUserSession()
    const {name} = user;
    const artworks = await getArtworksByArtistId(user.id);
    return (
        <div className='space-y-4'>
            <div className='text-[#D8A33D]'>
                <h1 className="text-2xl font-semibold">
                    Welcome back, {name}
                </h1>
                <p className="text-[#866c3c] text-sm">
                    Here&apos;s a quick look at your artworks, sales, and what&apos;s
                    pending review.
                </p>
            </div>
            <DashboardCard artworks={artworks} />
        </div>
    );
};

export default ArtistDashboardPage;