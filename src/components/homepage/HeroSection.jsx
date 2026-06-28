"use client";

import React from "react";
import { Button, Link } from "@heroui/react";
import { motion } from "motion/react";

const HeroSection = () => {
    return (
        <section className="relative flex h-[80vh] items-center justify-center overflow-hidden bg-[#090909] rounded-md">
            {/* Base Background */}
            <div className="absolute inset-0 bg-linear-to-br from-[#151515] via-[#0d0d0d] to-black" />

            {/* Moving Shine */}
            <motion.div
                animate={{
                    x: ["-60%", "60%", "-60%"],
                    rotate: [-15, -8, -15],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-[-40%] left-[-40%] h-[180%] w-[180%]"
            >
                <div
                    className="h-full w-full blur-[120px]"
                    style={{
                        background: `
                        linear-gradient(
                            110deg,
                            transparent 15%,
                            rgba(255,235,170,.06) 28%,
                            rgba(255,215,120,.45) 45%,
                            rgba(231,185,74,.75) 50%,
                            rgba(255,215,120,.45) 55%,
                            rgba(255,235,170,.06) 72%,
                            transparent 85%
                        )
                    `,
                    }}
                />
            </motion.div>

            {/* Secondary Shine */}
            <motion.div
                animate={{
                    x: ["60%", "-60%", "60%"],
                    rotate: [12, 6, 12],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-[-50%] left-[-50%] h-[200%] w-[200%] opacity-50"
            >
                <div
                    className="h-full w-full blur-[180px]"
                    style={{
                        background: `
                        linear-gradient(
                            120deg,
                            transparent 35%,
                            rgba(255,220,120,.18) 48%,
                            rgba(255,250,220,.45) 50%,
                            rgba(255,220,120,.18) 52%,
                            transparent 65%
                        )
                    `,
                    }}
                />
            </motion.div>

            {/* Golden vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(231,185,74,.15),transparent_65%)]" />

            {/* Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 mx-auto max-w-2xl px-4 text-center"
            >
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#E7B94A]"
                >
                    ArtHub Marketplace
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl font-black leading-tight text-white md:text-7xl"
                >
                    Discover &
                    <span className="block bg-linear-to-r from-[#FFD56A] via-[#FFF2B0] to-[#E7B94A] bg-clip-text text-transparent">
                        Collect Art
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mx-auto mt-6 max-w-xl text-lg text-white/70"
                >
                    Explore unique paintings from talented artists around
                    the world and build a collection you&apos;ll love.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    className="mt-10"
                >
                    <Link href="/arts">
                        <Button size='lg' className={'bg-[#E7B94A] text-black'}>
                            Browse Artworks
                        </Button>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;