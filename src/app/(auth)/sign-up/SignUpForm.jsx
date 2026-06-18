"use client";

import { useState } from "react";
import {
    Form,
    TextField,
    RadioGroup,
    Radio,
    Label,
    Input,
    Description,
    FieldError,
    Button,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
    const [password, setPassword] = useState("");
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const {name, email, image, password, role} = Object.fromEntries(formData.entries());
        
        const {data, error} = await authClient.signUp.email({
            email, password, name, image, role
        })

        if (!error) {
            alert('Signup successfull!');
            // router.push('/')
            window.location.href = '/'
        }
    }

    return (
        <Form
            className="flex mx-auto w-96 flex-col gap-4"
            render={(props) => <form {...props} data-custom="signup" />}
            onSubmit={onSubmit}
        >
            <TextField isRequired name="name" type="text">
                <Label className="text-[#D8A33D]">Full Name</Label>
                <Input className={'rounded-md'} placeholder="John Doe" />
                <FieldError />
            </TextField>

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

            <TextField name="image" type="url">
                <Label className="text-[#D8A33D]">Profile Image URL</Label>
                <Input className={'rounded-md'} placeholder="https://example.com/avatar.jpg" />
                <FieldError />
            </TextField>

            <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
                value={password}
                onChange={setPassword}
                validate={(value) => {
                    if (value.length < 8) {
                        return "Password must be at least 8 characters";
                    }
                    if (!/[A-Z]/.test(value)) {
                        return "Password must contain at least one uppercase letter";
                    }
                    if (!/[0-9]/.test(value)) {
                        return "Password must contain at least one number";
                    }
                    return null;
                }}
            >
                <Label className="text-[#D8A33D]">Password</Label>
                <Input className={'rounded-md'} placeholder="Enter your password" />
                <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                <FieldError />
            </TextField>

            <TextField
                isRequired
                name="confirmPassword"
                type="password"
                validate={(value) => {
                    const isMismatch = value !== password;
                    if (isMismatch) {
                        return "Passwords do not match";
                    }
                    return null;
                }}
            >
                <Label className="text-[#D8A33D]">Confirm Password</Label>
                <Input className={'rounded-md'} placeholder="Re-enter your password" />
                <FieldError />
            </TextField>

            <RadioGroup orientation="horizontal" isRequired name="role" defaultValue="user">
                <Label className="text-[#D8A33D]">I am signing up as</Label>
                <Radio
                    value="user"
                    className="group data-[selected=true]:border-orange-500"
                >
                    <Radio.Content>
                        <Radio.Control className="group-data-[selected=true]:border-orange-500">
                            <Radio.Indicator className="group-data-[selected=true]:bg-[#D8A33D] rounded-full" />
                        </Radio.Control>
                        User
                    </Radio.Content>
                </Radio>
                <Radio
                    value="artist"
                    className="group data-[selected=true]:border-orange-500"
                >
                    <Radio.Content className="group-data-[selected=true]:border-orange-500">
                        <Radio.Control>
                            <Radio.Indicator className="group-data-[selected=true]:bg-[#D8A33D] rounded-full" />
                        </Radio.Control>
                        Artist
                    </Radio.Content>
                </Radio>
                <FieldError />
            </RadioGroup>

            <div className="flex gap-2">
                <Button className={'rounded-md bg-[#D8A33D]'} type="submit">Sign Up</Button>
                <Button type="reset" variant="tertiary" className={'rounded-md'}>
                    Reset
                </Button>
            </div>
        </Form>
    );
}