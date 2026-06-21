import React from "react";
import { Card, Button } from "@heroui/react";
import Image from "next/image";

const ArtCard = ({ art }) => {
    const {
        title,
        price,
        imageUrl,
        category,
        status,
    } = art;

    console.log(imageUrl);

    return (
        <Card className="relative h-75 w-100 overflow-hidden">
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
                    <div className="text-base font-medium text-white sm:text-lg">
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
                    className="bg-white text-black"
                    variant="tertiary"
                >
                    View
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default ArtCard;