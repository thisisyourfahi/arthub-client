import { Skeleton } from "@heroui/react";

const ManageUsersSkeleton = () => {
    return (
        <div className="space-y-8">
            {/* Heading */}
            <div className="space-y-2">
                <Skeleton className="h-8 w-52 rounded-lg" />
                <Skeleton className="h-4 w-96 rounded-lg" />
            </div>

            {/* Table */}
            <div className="border border-default-200 rounded-xl overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-4 gap-4 p-4 border-b border-default-200">
                    <Skeleton className="h-5 w-20 rounded-md" />
                    <Skeleton className="h-5 w-24 rounded-md" />
                    <Skeleton className="h-5 w-16 rounded-md" />
                    <Skeleton className="h-5 w-20 rounded-md" />
                </div>

                {/* Rows */}
                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-4 gap-4 p-4 border-b border-default-100 last:border-b-0"
                    >
                        <Skeleton className="h-5 w-32 rounded-md" />
                        <Skeleton className="h-5 w-56 rounded-md" />
                        <Skeleton className="h-5 w-16 rounded-md" />
                        <div className="flex gap-2">
                            <Skeleton className="h-9 w-9 rounded-lg" />
                            <Skeleton className="h-9 w-9 rounded-lg" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageUsersSkeleton;