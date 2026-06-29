"use client";

import Link from "next/link";
import Image from "next/image";
import { Chip } from "@heroui/react";
import { Eye } from "@gravity-ui/icons";

const ArtistArtworks = ({ artworks }) => {
    if (!artworks?.length) {
        return (
            <div className="py-20 text-center">
                <h2 className="text-2xl font-bold">
                    No artworks yet 🎨
                </h2>

                <p className="text-default-500 mt-2">
                    This artist hasn&apos;t published any artwork.
                </p>
            </div>
        );
    }

    return (
        <section className="mt-16">
            <div className="mb-8">
                <h2 className="text-3xl font-bold">
                    Artworks
                </h2>

                <p className="text-default-500 mt-1">
                    {artworks.length} published artwork
                    {artworks.length > 1 && "s"}
                </p>
            </div>

            {/* Masonry Layout */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 px-4 md:px-0">

                {artworks.map((art) => (
                    <Link
                        key={art._id}
                        href={`/arts/${art._id}`}
                        className="group relative mb-4 block overflow-hidden rounded-2xl bg-zinc-900 break-inside-avoid"
                    >
                        <Image
                            src={art.imageUrl}
                            alt={art.title}
                            width={600}
                            height={600}
                            className="w-full h-auto transition duration-500 group-hover:scale-105"
                        />

                        {/* Overlay */}

                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5">

                            <div className="space-y-2">

                                <Chip
                                    size="sm"
                                    className="bg-[#d8a33d] text-black"
                                >
                                    {art.category}
                                </Chip>

                                <h3 className="text-xl font-bold text-white">
                                    {art.title}
                                </h3>

                                <div className="flex justify-between items-center">

                                    <p className="font-semibold text-[#d8a33d]">
                                        ${art.price}
                                    </p>

                                    <div className="flex items-center gap-1 text-sm text-white/80">
                                        <Eye width={16} />
                                        View
                                    </div>

                                </div>

                            </div>

                        </div>

                    </Link>
                ))}

            </div>
        </section>
    );
};

export default ArtistArtworks;