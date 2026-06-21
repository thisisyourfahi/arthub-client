'use client'

import { authClient } from '@/lib/auth-client';
import { Avatar, Dropdown } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const UserLoggedIn = ({ user }) => {
    const router = useRouter()

    const handleLogOut = async () => {
        const { data } = await authClient.signOut();

        if (data?.success) {
            alert('Logged out successfully')
            window.location.href = '/'
        }
    }

    const handleAction = (key) => {
        switch (key) {
            case 'profile':
                router.push(`/dashboard/${user?.role}/profile`);
                break;
            case 'dashboard':
                router.push(`/dashboard/${user?.role}`);
                break;
            case 'settings':
                router.push(`/dashboard/${user?.role}/settings`);
                break;
            case 'logout':
                handleLogOut();
                break;
        }
    }

    return (
        <Dropdown>
            <Dropdown.Trigger className="rounded-full outline-none" aria-label="User menu">
                <Avatar size="sm">
                    {user?.image && <Avatar.Image src={user.image} alt={user?.name} />}
                    <Avatar.Fallback>{user?.name?.[0] ?? 'U'}</Avatar.Fallback>
                </Avatar>
            </Dropdown.Trigger>
            <Dropdown.Popover className="min-w-45">
                <Dropdown.Menu onAction={handleAction}>
                    <Dropdown.Item id="profile" textValue="Profile">Profile</Dropdown.Item>
                    <Dropdown.Item id="dashboard" textValue="Dashboard">Dashboard</Dropdown.Item>
                    <Dropdown.Item id="logout" textValue="Log out" className="text-danger">Log out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
};

export default UserLoggedIn;