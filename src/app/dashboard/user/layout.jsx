import { requiredRole } from '@/lib/core/session';
import React from 'react';

const UserLayout = async ({ children }) => {
    await requiredRole('user');
    return children;
};

export default UserLayout;