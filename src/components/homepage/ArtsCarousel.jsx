/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const ArtsCarousel = ({ artworks }) => {
    return (
        <Carousel className="w-full max-w-sm md:max-w-[40vw] mx-auto">
            <CarouselContent>
                {artworks.map((art) => (
                    <CarouselItem key={art._id}>
                        <div className="p-1">
                            <Link href={`/arts/${art._id}`}>
                                <Card className="overflow-hidden cursor-pointer">
                                    <div className="overflow-hidden">
                                        <img
                                            src={art.imageUrl}
                                            alt={art.title}
                                            className="w-full h-90 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                                        />
                                    </div>
                                    <CardContent className="p-4 space-y-1 text-[#D8A33D]">
                                        <h3 className="font-semibold text-base truncate">{art.title}</h3>
                                        <p className="text-sm truncate">{art.category}</p>
                                        <div className="flex items-center justify-between pt-1">
                                            <span className="text-sm font-medium">${art.price}</span>
                                            <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                                                {art.status}
                                            </span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default ArtsCarousel;