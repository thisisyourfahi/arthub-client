import { checkForUser } from '@/lib/core/session';
import React from 'react';

const AuthLayout = async ({children}) => {
    await checkForUser();
    return children;
};

export default AuthLayout ;