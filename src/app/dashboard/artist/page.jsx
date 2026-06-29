import React from 'react';
import { getArtworksByArtistId } from '@/lib/api/artwork';
import { getUserSession } from '@/lib/core/session';
import { CircleDollar, Clock, Picture, ShoppingCart } from "@gravity-ui/icons";
import DashboardStats from '@/components/dashboard/DashboardStats';


const parsePrice = (price) => parseFloat(price) || 0;

const ArtistDashboardPage = async () => {
    const user = await getUserSession()
    const { name } = user;
    const artworks = await getArtworksByArtistId(user.id);

    const totalArtworks = artworks.length;

    const soldArtworks = artworks.filter((artwork) => artwork.status === "sold");
    const totalSales = soldArtworks.length;

    const totalRevenue = soldArtworks.reduce(
        (sum, artwork) => sum + parsePrice(artwork.price),
        0
    );

    const pendingApproval = artworks.filter(
        (artwork) => artwork.status === "pending"
    ).length;

    const stats = [
        { title: "Total Artworks", value: totalArtworks, icon: Picture },
        { title: "Total Sales", value: totalSales, icon: ShoppingCart },
        {
            title: "Total Revenue",
            value: `$${totalRevenue.toLocaleString()}`,
            icon: CircleDollar,
        },
        { title: "Pending Approval", value: pendingApproval, icon: Clock },
    ];

    return (
        <div className='space-y-8'>
            <div className='text-[#D8A33D]'>
                <h1 className="text-2xl font-semibold">
                    Welcome back, {name}
                </h1>
                <p className="text-[#866c3c] text-sm">
                    Here&apos;s a quick look at your artworks, sales, and what&apos;s
                    pending review.
                </p>
            </div>
            
            <DashboardStats stats={stats} />
        </div>
    );
};

export default ArtistDashboardPage;