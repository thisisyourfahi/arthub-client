import { Card, Chip, Label, ProgressBar } from "@heroui/react";
import React from "react";

const SubscriptionDetails = ({
    maxPurchase,
    plan,
    alreadyPurchasedCount,
}) => {
    const progress =
        maxPurchase > 0
            ? Math.min((alreadyPurchasedCount / maxPurchase) * 100, 100)
            : 0;

    return (
        <Card className="p-6 space-y-6">
            {/* <div>
                <h2 className="text-xl font-bold">
                    Subscription Details
                </h2>

                <p className="text-default-500 text-sm mt-1">
                    Track your artwork purchases.
                </p>
            </div> */}

            <div className="flex items-center justify-between">
                <span className="text-default-500">Current Plan</span>

                <Chip className="bg-[#d8a33d] text-black capitalize">
                    {plan.replace("arthub_", "")}
                </Chip>
            </div>

            <ProgressBar
                aria-label="Artwork purchase progress"
                value={progress}
                className="w-full"
            >
                <div className="flex justify-between mb-2">
                    <Label>Purchases Used</Label>
                    <ProgressBar.Output />
                </div>

                <ProgressBar.Track className="h-3 rounded-full bg-zinc-800">
                    <ProgressBar.Fill className="bg-[#d8a33d] rounded-full" />
                </ProgressBar.Track>
            </ProgressBar>

            <div className="flex justify-between text-sm">
                <span className="text-default-500">
                    {alreadyPurchasedCount} / {maxPurchase} used
                </span>

                <span className="font-semibold">
                    {Math.max(maxPurchase - alreadyPurchasedCount, 0)} remaining
                </span>
            </div>

            {progress >= 100 ? (
                <p className="text-danger text-sm">
                    You&apos;ve reached your purchase limit.
                </p>
            ) : progress >= 80 ? (
                <p className="text-warning text-sm">
                    Youre close to your purchase limit.
                </p>
            ) : (
                <p className="text-success text-sm">
                    You can still purchase more artworks.
                </p>
            )}
        </Card>
    );
};

export default SubscriptionDetails;