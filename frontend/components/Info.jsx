"use client";

import { signOut, useSession } from "next-auth/react";
import React from "react";

const Info = () => {
    const { data: session } = useSession();

    return (
        <div className="grid place-items-center h-screen">
            <p>Hello, {session?.user?.name}</p>
            <p>Email: {session?.user?.email}</p>
            <button
                onClick={() => signOut()}
                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
                Log Out
            </button>
        </div>
    );
};

export default Info;
