import React from "react";
import { Avatar, Button, Card, Chip, Separator, Skeleton } from "@heroui/react";

const PurchaseSkeleton = () => {
    return (
        <div className="space-y-4 max-w-7xl mx-auto">
            <Card className="space-y-4 p-6">
                <Skeleton className="h-6 w-32 rounded-lg" />

                <Skeleton className="h-3 w-full rounded-full" />

                <div className="flex justify-between">
                    <Skeleton className="h-4 w-20 rounded-lg" />
                    <Skeleton className="h-4 w-20 rounded-lg" />
                </div>
            </Card>

            <Card className="flex flex-row items-center justify-between p-6">
                {/* Left Section */}
                <div className="flex gap-4 items-center">
                    <Skeleton className="h-16 w-16 rounded-md" />

                    <div className="flex flex-col gap-2">
                        <Skeleton className="h-5 w-44 rounded-lg" />
                        <Skeleton className="h-4 w-28 rounded-lg" />
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex flex-col items-end gap-2">
                    <Skeleton className="h-4 w-16 rounded-lg" />
                    <Skeleton className="h-9 w-28 rounded-lg" />
                </div>
            </Card>

            <Card className="p-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

                    {/* Artwork Image */}
                    <Skeleton className="h-96 w-full rounded-lg" />

                    {/* Artwork Information */}
                    <div className="flex flex-col gap-6">

                        {/* Artist */}
                        <div className="flex items-center gap-3">
                            <Skeleton className="h-11 w-11 rounded-full" />
                            <div className="flex flex-col gap-1.5">
                                <Skeleton className="h-4 w-32 rounded-lg" />
                                <Skeleton className="h-3 w-20 rounded-lg" />
                            </div>
                        </div>

                        {/* Title + Status */}
                        <div className="flex items-start justify-between">
                            <Skeleton className="h-7 w-56 rounded-lg" />
                            <Skeleton className="h-7 w-20 rounded-full" />
                        </div>

                        <Separator />

                        {/* Price */}
                        <div className="space-y-2">
                            <Skeleton className="h-6 w-24 rounded-lg" />
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-full rounded-lg" />
                            <Skeleton className="h-4 w-full rounded-lg" />
                            <Skeleton className="h-4 w-3/4 rounded-lg" />
                        </div>

                        <Separator />

                        {/* Metadata */}
                        <div className="flex items-center gap-2">
                            <Skeleton className="h-4 w-4 rounded" />
                            <Skeleton className="h-4 w-36 rounded-lg" />
                        </div>

                    </div>
                </div>
            </Card>
        </div>
    );
};

export default PurchaseSkeleton;