import { Button, Card, Chip, Separator, Skeleton } from "@heroui/react";

const ProfileSkeleton = () => {
    return (
        <div className="min-h-screen max-w-7xl mx-auto px-4 py-10">
            <div className="max-w-2xl mx-auto flex flex-col gap-6">

                {/* Header */}
                <Card className="p-10 space-y-5">
                    <div className="flex flex-col items-center gap-4">
                        <Skeleton className="w-30 h-30 rounded-full" />

                        <div className="flex flex-col items-center gap-2">
                            <Skeleton className="h-8 w-48 rounded-lg" />
                            <Skeleton className="h-4 w-20 rounded-lg" />
                        </div>

                        <div className="flex gap-2">
                            <Chip>
                                <Skeleton className="h-4 w-20 rounded-md" />
                            </Chip>

                            <Chip>
                                <Skeleton className="h-4 w-16 rounded-md" />
                            </Chip>
                        </div>
                    </div>
                </Card>

                {/* Account Details */}
                <Card className="p-6">
                    <div className="space-y-5">
                        <Skeleton className="h-4 w-36 rounded-lg" />

                        {Array.from({ length: 5 }).map((_, index) => (
                            <div key={index}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Skeleton className="h-5 w-5 rounded-full" />
                                        <Skeleton className="h-4 w-24 rounded-md" />
                                    </div>

                                    <Skeleton className="h-4 w-32 rounded-md" />
                                </div>

                                {index !== 4 && (
                                    <Separator className="mt-4" />
                                )}
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Button */}
                <Skeleton className="h-11 w-full rounded-xl" />
            </div>
        </div>
    );
};

export default ProfileSkeleton;