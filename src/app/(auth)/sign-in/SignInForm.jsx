"use client";

import { authClient } from "@/lib/auth-client";
import {
    Form,
    TextField,
    Label,
    Input,
    FieldError,
    Button,
} from "@heroui/react";
import { useRouter } from "next/navigation";

export default function SignInForm() {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const { email, password } = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email, password
        })
        if (!error) {
            alert('Welcome to ArtHub!')
            // router.push('/')
            window.location.href = '/'
        } else {
            alert(error.message)
        }
    }
    return (
        <Form
            className="flex mx-auto w-96 flex-col gap-4"
            render={(props) => <form {...props} data-custom="signin" />}
            onSubmit={onSubmit}
        >
            <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                        return "Please enter a valid email address";
                    }
                    return null;
                }}
            >
                <Label className="text-[#D8A33D]">Email</Label>
                <Input className={'rounded-md'} placeholder="john@example.com" />
                <FieldError />
            </TextField>

            <TextField isRequired name="password" type="password">
                <Label className="text-[#D8A33D]">Password</Label>
                <Input className={'rounded-md'} placeholder="Enter your password" />
                <FieldError />
            </TextField>

            <div className="flex gap-2">
                <Button className={'rounded-md bg-[#D8A33D]'} type="submit">Sign In</Button>
            </div>
        </Form>
    );
}