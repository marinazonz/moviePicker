"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { BsGithub, BsGoogle } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-hot-toast";

import Button from "./ui/Button";
import Input from "./ui/Input";
import AuthButton from "./ui/AuthButton";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: { name: "", email: "", password: "" },
    });
    return (
        <div className='mt-5 sm:mx-auto w-full sm:max-w-md'>
            <div className='bg-white rounded-md px-8 py-4 sm:w-full'>
                <form className='space-y-4'>
                    <Input
                        id='email'
                        type='email'
                        label='Your Email'
                        register={register}
                        errors={errors}
                    />
                    <Input
                        id='password'
                        type='password'
                        label='Password'
                        register={register}
                        errors={errors}
                    />
                    <div>
                        <Button type='submit' primary>
                            Log In
                        </Button>
                    </div>
                </form>

                <div className='text-center'>
                    <div className='relative'>
                        <div className='absolute inset-0 flex items-center'>
                            <div className='w-full border-t border-gray-300' />
                        </div>
                    </div>

                    <div className='mt-7 flex flex-col gap-2 justify-center'>
                        <p>Or choose smth from below</p>

                        <div className='flex justify-center items-center gap-2'>
                            <AuthButton icon={BsGithub} onClick={() => {}} />
                            <AuthButton icon={BsGoogle} onClick={() => {}} />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-1 justify-center items-center text-center text-sm mt-6 px-2 text-gray-500'>
                    <p>Wait a minute!</p>
                    <div>Dont have an account yet?</div>
                    <div
                        className='underline cursor-pointer'
                        onClick={() => {}}
                    >
                        Create an account
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
