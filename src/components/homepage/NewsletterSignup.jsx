"use client";

import React from "react";
import { Button, Card, Input } from "@heroui/react";
import { Envelope } from "@gravity-ui/icons";
import { motion } from "framer-motion";

const NewsletterSignup = () => {
    return (
        <section className="w-full py-20 px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto"
            >
                <Card className="relative overflow-hidden rounded-3xl border border-[#d8a33d]/20 bg-neutral-950 p-10">
                    {/* Background Glow */}
                    <div className="absolute -top-28 -left-20 h-72 w-72 rounded-full bg-[#d8a33d]/15 blur-3xl" />
                    <div className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-[#d8a33d]/10 blur-3xl" />

                    <div className="relative z-10 text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#d8a33d]/15 border border-[#d8a33d]/30">
                            <Envelope className="h-7 w-7 text-[#d8a33d]" />
                        </div>

                        <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white">
                            Stay Inspired
                        </h2>

                        <p className="mt-4 max-w-2xl mx-auto text-neutral-400 leading-relaxed">
                            Subscribe to receive updates about new artwork,
                            featured artists, exclusive collections, and future
                            platform announcements.
                        </p>

                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="mt-10 flex flex-col md:flex-row gap-4 max-w-2xl mx-auto"
                        >
                            <Input
                                type="email"
                                placeholder="Enter your email address"
                                size="lg"
                                radius="lg"
                                className="flex-1"
                            />

                            <Button
                                className="bg-[#d8a33d] text-black font-semibold hover:opacity-90 transition"
                            >
                                Subscribe
                            </Button>
                        </form>

                        <p className="mt-5 text-sm text-neutral-500">
                            Frontend placeholder only. No emails are collected.
                        </p>
                    </div>
                </Card>
            </motion.div>
        </section>
    );
};

export default NewsletterSignup;