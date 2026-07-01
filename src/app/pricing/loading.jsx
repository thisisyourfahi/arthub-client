import { Card, Skeleton } from "@heroui/react";

const PricingSkeleton = () => {
    return (
        <div className="space-y-10">
            {/* Heading */}
            <div className="flex flex-col items-center space-y-3">
                <Skeleton className="h-10 w-72 rounded-lg" />
                <Skeleton className="h-4 w-80 rounded-lg" />
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Array.from({ length: 3 }).map((_, index) => (
                    <Card
                        key={index}
                        className="rounded-2xl p-6 space-y-6"
                    >
                        {/* Badge */}
                        <div className="flex justify-center">
                            <Skeleton className="h-6 w-20 rounded-full" />
                        </div>

                        {/* Plan Name */}
                        <div className="flex justify-center">
                            <Skeleton className="h-8 w-24 rounded-lg" />
                        </div>

                        {/* Price */}
                        <div className="flex justify-center">
                            <Skeleton className="h-12 w-32 rounded-lg" />
                        </div>

                        {/* Purchase Limit Box */}
                        <Card className="p-5 space-y-3">
                            <div className="flex justify-center">
                                <Skeleton className="h-3 w-32 rounded-md" />
                            </div>
                            <div className="flex justify-center">
                                <Skeleton className="h-8 w-36 rounded-lg" />
                            </div>
                        </Card>

                        {/* Button */}
                        <Skeleton className="h-11 w-full rounded-full" />
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default PricingSkeleton;