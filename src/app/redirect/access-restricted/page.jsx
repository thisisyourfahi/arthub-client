import { ShieldExclamation } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const AccessRestricted = () => {
    return (
        <div className='max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[70vh]  text-center space-y-2'>
            <ShieldExclamation width={64} height={64} className='mx-auto text-[#D8A33D]' />
            <div>
                <h2 className='text-2xl font-semibold text-[#D8A33D]'>Access Restricted</h2>
                <p className='text-[#D8A33D]'>Your current role do not have the permission to access that route. </p>
            </div>
            <Link href={'/'}>
                <Button className={'rounded-md bg-[#D8A33D]'}>
                    Back To Home
                </Button>
            </Link>
        </div>
    );
};

export default AccessRestricted;