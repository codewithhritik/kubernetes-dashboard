import Navbar from "@/components/Navbar";
import RegisterForm from "@/components/RegisterForm";
import React from "react";
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

async function Register() {

    const session = await getServerSession(authOptions);

    if (session) {
        redirect("dashboard");
    }

    return (
        <>
            <Navbar />
            <RegisterForm />
        </>
    );
};

export default Register;
