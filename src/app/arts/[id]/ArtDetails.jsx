import React from "react";
import {
    Card,
    Chip,
    Separator,
    Avatar,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "@gravity-ui/icons";

const ArtDetails = ({ art, artist }) => {
    const {
        title,
        category,
        description,
        imageUrl,
        price,
        status,
        createdAt,
        _id,
    } = art;

    console.log(art);

    return (
        <Card className="p-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

                {/* Artwork Image */}
                <div className="relative h-125 w-full overflow-hidden rounded-lg">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>


                {/* Artwork Information */}
                <div className="flex flex-col gap-5">

                    {/* Artist Details */}
                    <Link
                        href={`/artists/${artist?._id}`}
                        className="flex w-fit items-center gap-3 rounded-lg transition hover:opacity-80"
                    >
                        <Avatar>
                            <Avatar.Image alt="John Doe" src={artist?.image} />
                            <Avatar.Fallback>{artist?.name[0]}</Avatar.Fallback>
                        </Avatar>

                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <p className="font-medium text-default-900">
                                    {artist?.name}
                                </p>

                                <Chip
                                    size="sm"
                                    variant="soft"
                                    color="primary"
                                >
                                    Artist
                                </Chip>
                            </div>

                            <p className="text-xs text-default-500">
                                View profile
                            </p>
                        </div>
                    </Link>


                    {/* Title + Status */}
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h1 className="text-2xl font-bold text-default-900">
                                {title}
                            </h1>

                            <p className="mt-1 text-sm capitalize text-default-500">
                                {category}
                            </p>
                        </div>

                        <Chip
                            color={status === "Available" ? "success" : "danger"}
                            variant="soft"
                        >
                            {status.toUpperCase()}
                        </Chip>
                    </div>


                    <Separator />


                    {/* Price */}
                    <div>
                        <p className="text-sm text-default-500">
                            Price
                        </p>

                        <p className="text-xl font-semibold">
                            ${price}
                        </p>
                    </div>


                    {/* Description */}
                    <div>
                        <p className="text-sm text-default-500">
                            Description
                        </p>

                        <p className="mt-1 text-default-700">
                            {description || "No description available."}
                        </p>
                    </div>


                    <Separator />


                    {/* Metadata */}
                    <div className="grid grid-cols-1 gap-4 text-sm">

                        <div>
                            <p className="text-default-500">
                                Artwork ID
                            </p>

                            <p className="font-medium break-all">
                                {_id}
                            </p>
                        </div>


                        <div className="flex items-center gap-2">
                            <Calendar />

                            <p className="font-medium">
                                {new Date(createdAt).toLocaleDateString()}
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </Card>
    );
};

export default ArtDetails;