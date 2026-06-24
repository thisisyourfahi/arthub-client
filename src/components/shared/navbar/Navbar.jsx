import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';
import { Button, Dropdown } from '@heroui/react';
import UserLoggedIn from './UserLoggedIn';
import UserNotLoggedIn from './UserNotLoggedIn';
import { getUserSession } from '@/lib/core/session';

const Navbar = async () => {
    const links = [
        { href: '/', label: 'Home' },
        { href: '/arts', label: 'Browse Arts' }, 
        { href: '/pricing', label: 'Pricing' },
    ]

    const user = await getUserSession();

    return (
        <div className="flex items-center justify-between border-b border-b-[#99722b] text-[#D8A33D] mb-10 px-4 md:px-10 py-4">
            <div className="flex items-center gap-4">
                <Dropdown>
                    <Button isIconOnly variant="ghost" aria-label="Menu" className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </Button>
                    <Dropdown.Popover className="min-w-45">
                        <Dropdown.Menu>
                            {links.map((li) => (
                                <Dropdown.Item key={li.href} id={li.href} textValue={li.label}>
                                    <Link href={li.href} className="block w-full">{li.label}</Link>
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown.Popover>
                </Dropdown>

                <Link className="text-xl font-bold" href="/">ArtHub</Link>
            </div>

            <ul className="hidden lg:flex items-center gap-6">
                {links.map((li) => (
                    <li key={li.href}>
                        <Link href={li.href} className="hover:text-white/80 transition-colors">{li.label}</Link>
                    </li>
                ))}
            </ul>

            {user ? <UserLoggedIn user={user} /> : <UserNotLoggedIn />}
        </div>
    );
};

export default Navbar;