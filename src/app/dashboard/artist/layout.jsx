import { requiredRole } from '@/lib/core/session';
import React from 'react';

const ArtistLayout = async ({children}) => {
    await requiredRole('artist');
    return children;
};

export default ArtistLayout;