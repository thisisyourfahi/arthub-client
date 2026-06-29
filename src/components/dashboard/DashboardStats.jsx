import { Card } from '@heroui/react';
import React from 'react';
import { Calendar, CircleDollar, SquareHashtag, StarClock, Picture, ShoppingCart } from '@gravity-ui/icons';

const DashboardStats = ({ stats = [] }) => {
    return (
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(({ title, value, icon: Icon }) => (
                <Card key={title}>
                    <Card.Header className="flex-row items-center justify-between">
                        <Card.Title className="text-sm font-medium text-[#D8A33D]">
                            {title}
                        </Card.Title>
                        <Icon className="size-5 text-[#D8A33D]" />
                    </Card.Header>

                    <Card.Content>
                        <p className="text-xl text-[#D8A33D] font-semibold">{value}</p>
                    </Card.Content>
                </Card>
            ))}
        </div>
    );
};

export default DashboardStats;