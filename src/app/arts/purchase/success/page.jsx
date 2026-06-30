import { purchaseArtwork } from "@/lib/actions/artworks";
import { stripe } from "@/lib/stripe";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function PurchaseSuccess({ searchParams }) {
    const { session_id } = await searchParams;

    if (!session_id) {
        throw new Error("Please provide a valid session_id (`cs_test_...`)");
    }

    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (session.status === "open") {
        redirect("/");
    }

    if (session.status === "complete") {
        const {
            customer_details: { email: customerEmail },
            metadata,
        } = session;

        const artworkId = metadata.artworkId;
        const buyerId = metadata.buyerId;
        console.log(artworkId, buyerId);

        const purchaseInfo = {
            artworkId, buyerId, price: metadata.price
        }

        const res = await purchaseArtwork(purchaseInfo);

        return (
            <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-4">
                <div className="bg-[#1c1c1e] border border-white/6 rounded-2xl p-10 max-w-md w-full flex flex-col items-center text-center">

                    <div className="w-16 h-16 rounded-full bg-[#d8a33d]/10 border border-[#d8a33d]/20 flex items-center justify-center mb-6">
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                        >
                            <path
                                d="M6 14l6 6 10-10"
                                stroke="#d8a33d"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    <h1 className="text-2xl font-bold text-white mb-2">
                        Purchase Successful!
                    </h1>

                    <p className="text-sm text-white/45 mb-2">
                        Thank you for supporting an artist.
                    </p>

                    <p className="text-sm text-white/30 mb-8">
                        A confirmation has been sent to{" "}
                        <span className="text-white/60">
                            {customerEmail}
                        </span>
                        .
                    </p>

                    <Link
                        href="/dashboard/user/bought-artworks"
                        className="w-full py-2.5 rounded-xl bg-[#d8a33d] text-black font-semibold text-center"
                    >
                        View My Collection
                    </Link>

                    <Link
                        href="/arts"
                        className="mt-4 text-sm text-white/50 hover:text-white transition"
                    >
                        Continue Browsing
                    </Link>

                    <p className="text-xs text-white/25 mt-6">
                        Questions?{" "}
                        <a
                            href="mailto:mail.fahiyan@gmail.com"
                            className="underline underline-offset-2"
                        >
                            mail.fahiyan@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        );
    }

    redirect("/");
}