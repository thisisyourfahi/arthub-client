import { Palette, ShieldCheck, Sparkles } from "@gravity-ui/icons";
import React from "react";

const features = [
    {
        icon: Palette,
        title: "For Artists",
        description:
            "Upload your work, set your price, and reach collectors directly. No middleman, no gatekeeping — just your art, your terms.",
    },
    {
        icon: Sparkles,
        title: "For Collectors",
        description:
            "Discover original digital art from independent artists. Every piece is reviewed before it goes live, so you're browsing real, vetted work.",
    },
    {
        icon: ShieldCheck,
        title: "Built on Trust",
        description:
            "Every artwork goes through admin review before listing. We keep the marketplace clean so artists and buyers can transact with confidence.",
    },
];

const AboutPage = () => {
    return (
        <div className="mx-auto max-w-4xl px-4 py-16">
            <div className="text-center">
                <h1 className="text-3xl font-semibold sm:text-4xl">
                    About{" "}
                    <span className="text-[#D8A33D] transition-colors duration-300 hover:text-[#c0922e]">
                        ArtHub
                    </span>
                </h1>
                <p className="mt-4 text-default-500">
                    ArtHub is a digital art marketplace built to connect
                    independent artists with people who genuinely want to own
                    their work — without the noise of a generic stock site.
                </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
                {features.map(({ icon: Icon, title, description }) => (
                    <div
                        key={title}
                        className="rounded-lg border border-default-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D8A33D]/50 hover:shadow-lg"
                    >
                        <Icon className="size-6 text-[#D8A33D]" />
                        <h2 className="mt-4 font-medium">{title}</h2>
                        <p className="mt-2 text-sm text-default-500">
                            {description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <h2 className="text-xl font-medium">Why we built this</h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm text-default-500">
                    Most marketplaces treat artists as inventory. ArtHub
                    flips that — every artist gets a dashboard to manage
                    their own listings, track sales, and grow on their own
                    terms, while collectors get a curated, moderated space
                    to find work they actually want.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;