import React from 'react';
import { Avatar, Chip, Card, Separator, Button } from '@heroui/react';
import { Person, Envelope, Star, Calendar } from '@gravity-ui/icons';
import { getUserSession } from '@/lib/core/session';
import { getUserById } from '@/lib/api/user';
import Image from 'next/image';

const planLabels = {
    'user_free': 'Free Plan',
    'arthub_pro': 'Pro Plan',
    'arthub_premium': 'Premium Plan',
}

const ArtistProfilePage = async () => {
    const us = await getUserSession();
    const user = await getUserById(us?.id);
    // const user = {
    //     name: "Fahiyan Shah",
    //     email: "fahiyanofficial@gmail.com",
    //     emailVerified: false,
    //     image: "https://i.ibb.co/YFPhXjjZ/1000003824.png",
    //     createdAt: "2026-06-18T17:24:52.527Z",
    //     role: "artist",
    //     plan: "arthub_premium",
    // };

    const joinedDate = new Date(user?.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const planLabel = planLabels[user?.plan];

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white px-4 py-10">
            <div className="max-w-2xl mx-auto flex flex-col gap-6">

                {/* Header Card */}
                <Card className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl shadow-xl p-10">
                    <div className="flex flex-col items-center gap-4">
                        <Image
                            src={user.image}
                            alt={user.name}
                            referrerPolicy="no-referrer"
                            width={120}
                            height={120}
                            className="w-30 h-30 rounded-full ring-4 ring-[#d8a33d] object-cover"
                        />
                        <div className="text-center">
                            <h1 className="text-2xl font-bold text-white">{user?.name}</h1>
                            <p className="text-sm text-[#888] capitalize mt-1">{user?.role}</p>
                        </div>
                        <div className="flex gap-2 flex-wrap justify-center">
                            <Chip
                                style={{ backgroundColor: '#d8a33d22', color: '#d8a33d', border: '1px solid #d8a33d55' }}
                                size="sm"
                            >
                                <Star width={12} height={12} /> {planLabel}
                            </Chip>
                            <Chip
                                style={{
                                    backgroundColor: user?.emailVerified ? '#16a34a22' : '#7f1d1d22',
                                    color: user?.emailVerified ? '#4ade80' : '#f87171',
                                    border: `1px solid ${user?.emailVerified ? '#16a34a55' : '#7f1d1d55'}`
                                }}
                                size="sm"
                            >
                                {user?.emailVerified ? 'Verified' : 'Unverified'}
                            </Chip>
                        </div>
                    </div>
                </Card>

                {/* Info Card */}
                <Card className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl shadow-xl px-6 py-6">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-sm font-semibold text-[#888] uppercase tracking-widest">Account Details</h2>

                        <div className="flex items-center gap-3 text-sm">
                            <Person width={16} height={16} className="text-[#d8a33d]" />
                            <span className="text-[#aaa]">Name</span>
                            <span className="ml-auto text-white">{user?.name}</span>
                        </div>

                        <Separator className="bg-[#2a2a2a]" />

                        <div className="flex items-center gap-3 text-sm">
                            <Envelope width={16} height={16} className="text-[#d8a33d]" />
                            <span className="text-[#aaa]">Email</span>
                            <span className="ml-auto text-white">{user.email}</span>
                        </div>

                        <Separator className="bg-[#2a2a2a]" />

                        <div className="flex items-center gap-3 text-sm">
                            <Star width={16} height={16} className="text-[#d8a33d]" />
                            <span className="text-[#aaa]">Plan</span>
                            <span className="ml-auto text-white">{planLabel}</span>
                        </div>

                        <Separator className="bg-[#2a2a2a]" />

                        <div className="flex items-center gap-3 text-sm">
                            <Calendar width={16} height={16} className="text-[#d8a33d]" />
                            <span className="text-[#aaa]">Joined</span>
                            <span className="ml-auto text-white">{joinedDate}</span>
                        </div>
                    </div>
                </Card>

                {/* Actions */}
                <div className="flex gap-3">
                    <Button
                        className="flex-1 font-semibold"
                        style={{ backgroundColor: '#d8a33d', color: '#0f0f0f' }}
                    >
                        Edit Profile
                    </Button>
                    {user.plan !== 'arthub_premium' && (
                        <Button
                            className="flex-1 font-semibold"
                            variant="bordered"
                            style={{ borderColor: '#2a2a2a', color: '#aaa' }}
                        >
                            Upgrade Plan
                        </Button>
                    )}
                </div>

            </div>
        </div>
    );
};

export default ArtistProfilePage;