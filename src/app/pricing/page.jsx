"use client";

import React from "react";
import { Card, Button, Chip } from "@heroui/react";

const pricingPlans = [
    {
        name: "Free",
        id: 'arthub_free',
        badge: "Default",
        price: "$0",
        limit: "3 paintings",
        buttonText: "Current Plan",
        popular: false,
        isDisabled: true,
    },
    {
        name: "Pro",
        id: 'arthub_pro',
        badge: "Most Popular",
        price: "$9.99",
        limit: "9 paintings",
        buttonText: "Upgrade to Pro",
        popular: true,
    },
    {
        name: "Premium",
        id: 'arthub_premium',
        badge: "Best Value",
        price: "$19.99",
        limit: "Unlimited",
        buttonText: "Go Premium",
        popular: false,
    },
];

const PricingPage = () => {
    return (
        <section className="min-h-screen bg-black px-6 py-16 rounded-md">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-14 text-center">
                    <h1 className="text-4xl font-bold text-white md:text-5xl">
                        Choose Your Plan
                    </h1>
                    <p className="mt-4 text-gray-400">
                        Upgrade your account and showcase more artwork.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {pricingPlans.map((plan) => (
                        <Card
                            key={plan.name}
                            className={`p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${plan.popular
                                ? "border-[#D8A33D] bg-zinc-900"
                                : "border-zinc-800 bg-zinc-950"
                                }`}
                        >
                            <div className="flex flex-col items-center gap-3">
                                {plan.badge && (
                                    <Chip
                                        size="sm"
                                        className="bg-[#D8A33D] text-black font-semibold"
                                    >
                                        {plan.badge}
                                    </Chip>
                                )}

                                {plan.popular && (
                                    <Chip
                                        size="sm"
                                        variant="flat"
                                        className="bg-[#D8A33D]/20 text-[#D8A33D]"
                                    >
                                        Most Popular
                                    </Chip>
                                )}

                                <h2 className="text-2xl font-bold text-white">
                                    {plan.name}
                                </h2>

                                <span className="text-5xl font-bold text-[#D8A33D]">
                                    {plan.price}
                                </span>
                            </div>

                            <div className="mt-8">
                                <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 text-center">
                                    <p className="text-sm uppercase tracking-wider text-gray-400">
                                        Max Purchases Allowed
                                    </p>

                                    <p className="mt-2 text-2xl font-semibold text-white">
                                        {plan.limit}
                                    </p>
                                </div>

                                <form action="/api/checkout_sessions" method="POST">
                                    <input type="hidden" name="type" value={'subscription'} />
                                    <input type='hidden' name='plan_id' value={plan.id} />
                                    <section>
                                        <Button fullWidth className={'mt-4 bg-[#d8a33d] text-black'} type="submit" role="link" isDisabled={plan.isDisabled}>
                                            {plan.buttonText}
                                        </Button>
                                    </section>
                                </form>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingPage;