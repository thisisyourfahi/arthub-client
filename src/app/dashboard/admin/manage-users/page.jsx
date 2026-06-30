import { getAllUsers } from '@/lib/api/user';
import React from 'react';
import AllUsersTableContainer from './AllUsersTableContainer';

const AdminManageUserPage = async () => {
    const users = await getAllUsers();
    console.log(users); 
    return (
        <div>
            <p>manage-users</p>
            <AllUsersTableContainer allUsers={users} />
        </div>
    );
};

export default AdminManageUserPage;