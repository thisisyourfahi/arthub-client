'use client'

import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';


const UserLoggedIn = ({ user }) => {
    const router = useRouter()
    const handleLogOut = async () => {
        const { data } = await authClient.signOut();

        if (data?.success) {
            alert('Logged out successfully')
            // router.push('/')
            window.location.href = '/'
        }
    }

    return (
        <div className="dropdown dropdown-left md:dropdown-bottom">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-8 rounded-full">
                    <Image width={10} height={10}
                        alt={user?.name}
                        src={user?.image} />
                </div>
            </div>
            <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow">


                <li>
                    <Link href={'/profile'}>Profile</Link>
                </li>
                <li>

                    <Link href={'/settings'}>Settings</Link>
                </li>

                <Button onClick={handleLogOut} size='sm' className={'rounded-md w-full'} variant='danger-soft'>
                    Log out
                </Button>
            </ul>
        </div>
    );
};

export default UserLoggedIn;