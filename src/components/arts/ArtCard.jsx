import React from "react";
import { Card, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const ArtCard = ({ art }) => {
    const {
        _id,
        title,
        price,
        imageUrl,
        category,
        status,
    } = art;

    return (
        <Link href={`/arts/${_id}`}>
            <Card className="relative  h-75 md:w-90 lg:w-100 overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110">
                <Image
                    width={400}
                    height={300}
                    alt={title}
                    aria-hidden="true"
                    className="absolute inset-0 object-cover"
                    src={imageUrl}
                />

                {/* Optional overlay for readability */}
                <div className="absolute inset-0 bg-black/30" />

                <Card.Footer className="z-10 mt-auto flex items-end justify-between">
                    <div>
                        <div className="text-base font-medium text-[#D8A33D] sm:text-lg">
                            {title}
                        </div>

                        <div className="flex gap-2 text-xs font-medium text-white/70 sm:text-sm">
                            <span className="capitalize">
                                {category}
                            </span>
                            <span>
                                ${price}
                            </span>
                        </div>
                    </div>
                    <Button
                        size="sm"
                        className="bg-[#D8A33D]"
                        variant="tertiary"
                    >
                        View
                    </Button>
                </Card.Footer>
            </Card>
        </Link>

    );
};

export default ArtCard;