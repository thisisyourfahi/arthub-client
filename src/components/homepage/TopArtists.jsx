import Image from "next/image";
import { CrownDiamond } from "@gravity-ui/icons";
import Link from "next/link";

const TopArtists = ({ topArtists }) => {
    if (!topArtists?.length) return null;

    const [first, second, third] = topArtists;

    return (
        <section>
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-14">
                    <h2 className="text-5xl text-[#D8A33D] font-bold uppercase">
                        Top Artists
                    </h2>

                    <p className="text-[#6e5018] mt-3">
                        Meet the three most active artists in our community.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-end justify-center gap-8">

                    {/* SECOND */}
                    {second && (
                        <ArtistCard
                            artist={second}
                            place={2}
                            height="h-[430px]"
                        />
                    )}

                    {/* FIRST */}
                    {first && (
                        <ArtistCard
                            artist={first}
                            place={1}
                            champion
                            height="h-[500px]"
                        />
                    )}

                    {/* THIRD */}
                    {third && (
                        <ArtistCard
                            artist={third}
                            place={3}
                            height="h-[430px]"
                        />
                    )}

                </div>
            </div>
        </section>
    );
};

export default TopArtists;



function ArtistCard({
    artist,
    place,
    champion = false,
    height
}) {

    const badgeColor =
        place === 1
            ? "#d8a33d"
            : place === 2
                ? "#b8bcc6"
                : "#c98552";

    return (
        <Link href={`/artist/${artist._id}`}>
            <div
                className={`
            relative
            w-[320px]
            ${height}
            rounded-3xl
            border
            border-white/10
            bg-zinc-900
            p-8
            flex
            flex-col
            items-center
            transition-all
            duration-300
            hover:-translate-y-2
            cursor-pointer
        `}
                style={
                    champion
                        ? {
                            boxShadow:
                                "0 0 70px rgba(216,163,61,.28)",
                        }
                        : {}
                }
            >
                {/* Badge */}

                <div
                    className="absolute -top-5 px-6 py-2 rounded-full font-bold text-black text-sm tracking-wide flex items-center gap-2"
                    style={{
                        background: badgeColor,
                    }}
                >
                    {champion && <CrownDiamond width={18} />}

                    {champion
                        ? "Champion"
                        : place === 2
                            ? "Runner Up"
                            : "Third Place"}
                </div>

                {/* Avatar */}

                <div
                    className="relative mt-8 rounded-full p-1"
                    style={{
                        border: `4px solid ${badgeColor}`,
                    }}
                >
                    <Image
                        src={artist.image}
                        alt={artist.name}
                        width={140}
                        height={140}
                        className="rounded-full object-cover w-36 h-36"
                    />

                    <div
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center font-bold text-black"
                        style={{
                            background: badgeColor,
                        }}
                    >
                        {place}
                    </div>
                </div>

                {/* Name */}

                <h3 className="mt-4 text-3xl font-bold text-center line-clamp-1">
                    {artist.name}
                </h3>

                {/* Artwork Count */}

                <div
                    className="mt-4 text-5xl font-black"
                    style={{
                        color: badgeColor,
                    }}
                >
                    {artist.numberOfArtworks}
                </div>

                <p className="text-default-500 mt-1">
                    Artworks Published
                </p>

                <div className="w-full border-t border-white/10 mt-8 pt-6 flex justify-center">

                    <span className="text-[#D8A33D]">
                        Rank #{place}
                    </span>

                </div>
            </div>
        </Link>
    );
}