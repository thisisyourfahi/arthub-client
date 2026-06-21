import { CircleDollar, Clock, Picture, ShoppingCart } from "@gravity-ui/icons";
import { Card } from "@heroui/react";
import React from "react";

const parsePrice = (price) => parseFloat(price) || 0;

const DashboardCard = ({ artworks = [] }) => {
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(({ title, value, icon: Icon }) => (
                <Card key={title}>
                    <Card.Header className="flex-row items-center justify-between">
                        <Card.Title className="text-sm font-medium text-[#D8A33D]">
                            {title}
                        </Card.Title>
                        <Icon className="size-5 text-[#D8A33D]" />
                    </Card.Header>

                    <Card.Content>
                        <p className="text-2xl text-[#D8A33D] font-semibold">{value}</p>
                    </Card.Content>
                </Card>
            ))}
        </div>
    );
};

export default DashboardCard;