import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <div className="flex min-h-screen items-center justify-center bg-[#fafafa] p-6 dark:bg-[#1b1b1b]">
                <div className="w-full max-w-md rounded-xl bg-[#fffaf4] p-8 shadow-lg dark:bg-[#2b2b2b]">
                    <h1 className="mb-2 text-2xl font-semibold text-[#8b4a1c] text-center dark:text-[#d4a373]">
                        Welcome To Admin
                    </h1>
                    <p className="mb-6 text-sm text-gray-600 text-center dark:text-gray-300">
                        Please log in or register to continue
                    </p>

                    <div className="flex flex-col gap-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="rounded-md bg-[#8b4a1c] px-6 py-2 text-center font-medium text-white transition hover:bg-[#a55d2a]"
                            >
                                Go to Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="rounded-md bg-[#8b4a1c] px-6 py-2 text-center font-medium text-white transition hover:bg-[#a55d2a]"
                                >
                                    Login
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="rounded-md border border-[#d4a373] px-6 py-2 text-center font-medium text-[#8b4a1c] transition hover:bg-[#d4a373] hover:text-white"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

