import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const { name, email, password } = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);

        const resp = await fetch(
            "https://us-west-2.aws.neurelo.com/rest/users/__one",
            {
                method: "POST",
                headers: {
                    "X-API-KEY": process.env.NEURELO_VALUE
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: hashedPassword,
                }),
            }
        );

        console.log(await resp.json());

        return NextResponse.json(resp);
    } catch (error) {
        return NextResponse.json(
            { message: "Error occured while registering user" },
            { status: 500 }
        );
    }
}
