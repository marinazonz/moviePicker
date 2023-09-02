import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
    return (
        <main className='flex flex-col min-h-screen items-center justify-center p-10 text-gray-900'>
            <div className='sm:mx-auto w-full sm:max-w-md'>
                <Image
                    width='52'
                    height='52'
                    alt='Logo'
                    src='/images/logo.png'
                    className='mx-auto w-auto'
                />
            </div>
            <h2 className='mt-6 text-center text-lg md:text-xl font-bold'>
                Hello there!
            </h2>
            <AuthForm />
        </main>
    );
}
