import { getUserSession } from '@/lib/core/session';
import React from 'react';

const UserPurchaseHistory = async () => {
    const user = await getUserSession();
    return (
        <div>
            <p>User Purchase History Page</p>

        </div>
    );
};

export default UserPurchaseHistory;