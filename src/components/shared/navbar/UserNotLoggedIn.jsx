import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const UserNotLoggedIn = () => {
    return (
        <div className="flex gap-4 items-center">
            <Link href="/sign-in" className="hover:text-white/80 transition-colors">
                Sign In
            </Link>
            <Link href="/sign-up">
                <Button size="sm" className="rounded-md bg-[#D8A33D]">
                    Sign Up
                </Button>
            </Link>
        </div>
    );
};

export default UserNotLoggedIn;