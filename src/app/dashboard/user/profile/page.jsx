import React from "react";
import { Card, Chip, Separator, Button } from "@heroui/react";
import {
    Person,
    Envelope,
    Star,
    Calendar,
    ShoppingBag,
} from "@gravity-ui/icons";
import Image from "next/image";

import { getUserSession } from "@/lib/core/session";
import { getUserById } from "@/lib/api/user";

const planLabels = {
    arthub_free: "Free Plan",
    arthub_pro: "Pro Plan",
    arthub_premium: "Premium Plan",
};

const UserProfilePage = async () => {
    const session = await getUserSession();
    const user = await getUserById(session?.id);

    const joinedDate = new Date(user.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const planLabel = planLabels[user.plan];
    const purchasedCount = user.purchaseArtworksId?.length ?? 0;

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white px-4 py-10">
            <div className="max-w-2xl mx-auto flex flex-col gap-6">

                {/* Header */}
                <Card className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl shadow-xl p-10">
                    <div className="flex flex-col items-center gap-4">
                        <Image
                            src={user?.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2rFNJSKPLohcn_M4_oUGRIXub5q5GXPuOWg&s'}
                            alt={user?.name}
                            width={120}
                            height={120}
                            referrerPolicy="no-referrer"
                            className="w-30 h-30 rounded-full ring-4 ring-[#d8a33d] object-cover"
                        />

                        <div className="text-center">
                            <h1 className="text-2xl font-bold">
                                {user.name}
                            </h1>

                            <p className="text-sm text-[#888] mt-1 capitalize">
                                User
                            </p>
                        </div>

                        <div className="flex gap-2 flex-wrap justify-center">
                            <Chip
                                size="sm"
                                style={{
                                    backgroundColor: "#d8a33d22",
                                    color: "#d8a33d",
                                    border: "1px solid #d8a33d55",
                                }}
                            >
                                <Star width={12} height={12} />
                                {planLabel}
                            </Chip>

                            <Chip
                                size="sm"
                                style={{
                                    backgroundColor: user.emailVerified
                                        ? "#16a34a22"
                                        : "#7f1d1d22",
                                    color: user.emailVerified
                                        ? "#4ade80"
                                        : "#f87171",
                                    border: `1px solid ${user.emailVerified
                                        ? "#16a34a55"
                                        : "#7f1d1d55"
                                        }`,
                                }}
                            >
                                {user.emailVerified
                                    ? "Verified"
                                    : "Unverified"}
                            </Chip>
                        </div>
                    </div>
                </Card>

                {/* Account Details */}
                <Card className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl shadow-xl px-6 py-6">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-sm font-semibold text-[#888] uppercase tracking-widest">
                            Account Details
                        </h2>

                        <div className="flex items-center gap-3 text-sm">
                            <Person
                                width={16}
                                height={16}
                                className="text-[#d8a33d]"
                            />
                            <span className="text-[#aaa]">Name</span>
                            <span className="ml-auto">{user.name}</span>
                        </div>

                        <Separator className="bg-[#2a2a2a]" />

                        <div className="flex items-center gap-3 text-sm">
                            <Envelope
                                width={16}
                                height={16}
                                className="text-[#d8a33d]"
                            />
                            <span className="text-[#aaa]">Email</span>
                            <span className="ml-auto">{user.email}</span>
                        </div>

                        <Separator className="bg-[#2a2a2a]" />

                        <div className="flex items-center gap-3 text-sm">
                            <Star
                                width={16}
                                height={16}
                                className="text-[#d8a33d]"
                            />
                            <span className="text-[#aaa]">Plan</span>
                            <span className="ml-auto">{planLabel}</span>
                        </div>

                        <Separator className="bg-[#2a2a2a]" />

                        <div className="flex items-center gap-3 text-sm">
                            <ShoppingBag
                                width={16}
                                height={16}
                                className="text-[#d8a33d]"
                            />
                            <span className="text-[#aaa]">
                                Purchased Artworks
                            </span>
                            <span className="ml-auto">
                                {purchasedCount}
                            </span>
                        </div>

                        <Separator className="bg-[#2a2a2a]" />

                        <div className="flex items-center gap-3 text-sm">
                            <Calendar
                                width={16}
                                height={16}
                                className="text-[#d8a33d]"
                            />
                            <span className="text-[#aaa]">Joined</span>
                            <span className="ml-auto">
                                {joinedDate}
                            </span>
                        </div>
                    </div>
                </Card>

                {/* Upgrade */}
                {
                    user.plan !== "arthub_premium" && (
                        <Button
                            className="font-semibold"
                            style={{
                                backgroundColor: "#d8a33d",
                                color: "#0f0f0f",
                            }}
                        >
                            Upgrade Plan
                        </Button>
                    )
                }
            </div >
        </div >
    );
};

export default UserProfilePage;