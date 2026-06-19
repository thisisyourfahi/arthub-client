import { ShieldExclamation } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const AlreadyLoggedIn = () => {
    return (
        <div className='max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[70vh]  text-center space-y-2'>
            <ShieldExclamation width={64} height={64} className='mx-auto text-[#D8A33D]' />
            <div>
                <h2 className='text-2xl font-semibold text-[#D8A33D]'>You&apos;re logged in</h2>
                <p className='text-[#D8A33D]'>If you want to switch your account please log out first!.</p>
            </div>
            <Link href={'/'}>
                <Button className={'rounded-md bg-[#D8A33D]'}>
                    Back To Home
                </Button>
            </Link>
        </div>
    );
};

export default AlreadyLoggedIn;