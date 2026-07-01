import { getAllUsers } from '@/lib/api/user';
import React from 'react';
import AllUsersTableContainer from './AllUsersTableContainer';

const AdminManageUserPage = async () => {
    const users = await getAllUsers();

    return (
        <div className='space-y-8'>
            <div>
                <h2 className='text-2xl text-[#d8a33d]'>Manage Users</h2>
                <p className='text-[#6e5018]'>View, update, and manage system user accounts and their respective access roles.</p>
            </div>
            <AllUsersTableContainer allUsers={users} />
        </div>
    );
};

export default AdminManageUserPage;