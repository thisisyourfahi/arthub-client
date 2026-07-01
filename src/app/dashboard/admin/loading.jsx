import { Card, Skeleton } from "@heroui/react";

const DashboardStatsSkeleton = () => {
    return (
        <div className="space-y-8">
            {/* Heading */}
            <div className="space-y-2">
                <Skeleton className="h-8 w-64 rounded-lg" />
                <Skeleton className="h-4 w-96 rounded-lg" />
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card
                    className="p-6 space-y-5 bg-content1 rounded-2xl"
                >
                    <div className="flex justify-between items-center">
                        <Skeleton className="h-4 w-24 rounded-md" />
                        <Skeleton className="h-5 w-5 rounded-full" />
                    </div>

                    <Skeleton className="h-8 w-16 rounded-md" />
                </Card>
                <Card
                    className="p-6 space-y-5 bg-content1 rounded-2xl"
                >
                    <div className="flex justify-between items-center">
                        <Skeleton className="h-4 w-24 rounded-md" />
                        <Skeleton className="h-5 w-5 rounded-full" />
                    </div>

                    <Skeleton className="h-8 w-16 rounded-md" />
                </Card>
                <Card
                    className="p-6 space-y-5 bg-content1 rounded-2xl"
                >
                    <div className="flex justify-between items-center">
                        <Skeleton className="h-4 w-24 rounded-md" />
                        <Skeleton className="h-5 w-5 rounded-full" />
                    </div>

                    <Skeleton className="h-8 w-16 rounded-md" />
                </Card>
                <Card
                    className="p-6 space-y-5 bg-content1 rounded-2xl"
                >
                    <div className="flex justify-between items-center">
                        <Skeleton className="h-4 w-24 rounded-md" />
                        <Skeleton className="h-5 w-5 rounded-full" />
                    </div>

                    <Skeleton className="h-8 w-16 rounded-md" />
                </Card>
            </div>
        </div>
    );
};

export default DashboardStatsSkeleton;