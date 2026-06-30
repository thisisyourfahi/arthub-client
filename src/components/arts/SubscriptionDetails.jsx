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
        <Card className="p-6 space-y-2">
            <div className="flex items-center justify-between">
                <span className="text-[#D8A33D]">Current Plan</span>

                <Chip className="bg-[#d8a33d] text-black capitalize">
                    {plan.replace("arthub_", "")}
                </Chip>
            </div>

            <ProgressBar
                aria-label="Artwork purchase progress"
                value={progress}
                className="w-full"
            >
                <div className="flex justify-between text-[#D8A33D] mb-2">
                    <Label className="text-[#D8A33D]">Purchases Used</Label>
                    <ProgressBar.Output />
                </div>

                <ProgressBar.Track className="h-3 rounded-full bg-zinc-800">
                    <ProgressBar.Fill className="bg-[#d8a33d] rounded-full" />
                </ProgressBar.Track>
            </ProgressBar>

            <div className="flex justify-between text-sm">
                <span className="text-[#D8A33D]">
                    {alreadyPurchasedCount} / {maxPurchase} used
                </span>

                <span className="font-semibold text-[#D8A33D]">
                    {Math.max(maxPurchase - alreadyPurchasedCount, 0)} remaining
                </span>
            </div>
        </Card>
    );
};

export default SubscriptionDetails;