import Image from "next/image";

const Greeting = () => {
    return (
        <div className='flex flex-col gap-16 justify-center items-center w-full h-full text-center'>
            <div className='h-full'>
                <Image
                    width={72}
                    height={72}
                    alt='logo'
                    src='/images/logo.png'
                />
            </div>
            <div>Hello there! Doesnt have an account yet?</div>
            <div>Click here</div>

            <div>Or choose smth from below</div>
            <div className='flex justify-center items-center gap-5'>
                <div>link to google</div>
                <div>link to github</div>
            </div>
        </div>
    );
};

export default Greeting;
