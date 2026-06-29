import Link from "next/link";
import { Button } from "@heroui/react";
import { Lock } from "@gravity-ui/icons";

const LogInFirst = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6">
            <div className="max-w-lg w-full text-center bg-zinc-900/60 border border-zinc-800 rounded-3xl p-10 backdrop-blur-sm">

                <div className="mx-auto w-20 h-20 rounded-full bg-[#d8a33d]/15 flex items-center justify-center mb-6">
                    <Lock width={40} height={40} className="text-[#d8a33d]" />
                </div>

                <h1 className="text-4xl text-[#D8A33D] font-bold">
                    Login Required
                </h1>

                <p className="text-[#6e5018] mt-4 leading-7">
                    You need to be logged in before purchasing a subscription
                    plan.
                </p>

                <p className="text-[#6e5018] mt-2">
                    Sign in to continue securely with your purchase.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                    <Link href={'/sign-in'}>
                        <Button
                            className="bg-[#d8a33d] text-black font-semibold"
                            size="lg"
                        >
                            Log In
                        </Button>
                    </Link>

                    <Link href={'/pricing'}>
                        <Button
                            variant="tertiary"
                            size="lg"
                        >
                            Back to Pricing
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LogInFirst;