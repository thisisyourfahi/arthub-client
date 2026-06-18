import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const links = [
        { href: '/', label: 'Home' },
        { href: '/arts', label: 'Browse Arts' }
    ]

    return (
        <div className="navbar bg-base-100 shadow-sm text-[#D8A33D]">
            <div className="navbar-start">
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
            <div className="navbar-end dropdown dropdown-bottom justify-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <Image width={10} height={10}
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
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

                    <Button size='sm' className={'rounded-md w-full'} variant='danger-soft'>
                        Log out
                    </Button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;