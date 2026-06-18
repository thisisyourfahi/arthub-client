import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import UserLoggedIn from './UserLoggedIn';
import UserNotLoggedIn from './UserNotLoggedIn';

const Navbar = async () => {
    const links = [
        { href: '/', label: 'Home' },
        { href: '/arts', label: 'Browse Arts' }
    ]

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user

    console.log('user data:', user);

    return (
        <div className="navbar justify-between bg-base-100 shadow-sm text-[#D8A33D] mb-8 md:px-10">
            <div className="">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links.map((li, ind) => <li key={ind}><Link href={li.href}>{li.label}</Link></li>)}
                    </ul>
                </div>
                <Link className='text-xl font-bold' href={'/'}>ArtHub</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links.map((li, ind) => <li key={ind}><Link href={li.href}>{li.label}</Link></li>)}
                </ul>
            </div>
            {
                user ? <>
                    <UserLoggedIn user={user} />
                </> : <>
                    <UserNotLoggedIn />
                </>
            }
        </div>
    );
};

export default Navbar;