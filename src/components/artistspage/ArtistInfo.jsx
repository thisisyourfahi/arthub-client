import { Star } from "@gravity-ui/icons";
import { Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";

const ArtistInfo = ({ user, numberOfArtworks }) => {
    const joinedOn = new Date(user.createdAt).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar */}
            <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#d8a33d]/20 blur-2xl" />

                <Image
                    src={user.image}
                    alt={user.name}
                    referrerPolicy="no-referrer"
                    width={180}
                    height={180}
                    className="relative w-44 h-44 rounded-full object-cover border-4 border-[#d8a33d]"
                />
            </div>

            {/* Info */}
            <div className="text-center md:text-left space-y-3">
                <div>
                    <h1 className="text-4xl font-bold text-[#D8A33D]">
                        {user.name}
                    </h1>

                    <p className="text-[#6e5018] mt-1">
                        {user.email}
                    </p>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    <Chip
                        className="bg-[#d8a33d] text-black"
                    >
                        <Star width={14} /> {user.role}
                    </Chip>

                    <Chip variant="flat">
                        {numberOfArtworks} Artwork{numberOfArtworks !== 1 && "s"}
                    </Chip>
                </div>

                <p className="text-sm text-[#6e5018]">
                    Joined on{" "}
                    <span className="text-default-200 font-medium">
                        {joinedOn}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default ArtistInfo;