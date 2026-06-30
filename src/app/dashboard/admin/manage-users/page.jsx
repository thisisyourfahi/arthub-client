import { getAllUsers } from '@/lib/api/user';
import React from 'react';
import AllUsersTableContainer from './AllUsersTableContainer';

const AdminManageUserPage = async () => {
    const users = await getAllUsers();
    
    return (
        <div>
            <p>manage-users</p>
            <AllUsersTableContainer allUsers={users} />
        </div>
    );
};

export default AdminManageUserPage;