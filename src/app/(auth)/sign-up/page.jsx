import React from 'react';
import SignUpForm from './SignUpForm';

const SignUpPage = () => {
    return (
        <div className='space-y-4'>
            <div className="flex flex-col gap-1 text-center text-[#D8A33D]">
                <h1 className="text-2xl font-semibold ">Create your account</h1>
                <p className="text-sm">Sign up to get started</p>
            </div>
            <SignUpForm />
        </div>
    );
};

export default SignUpPage;