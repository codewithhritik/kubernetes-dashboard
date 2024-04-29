import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { email } = await req.json();

        const resp = await fetch(
            `https://us-west-2.aws.neurelo.com/custom/userExists`,
            {
                method: "POST",
                headers: {
                    "X-API-KEY": process.env.NEURELO_VALUE,
                },
                body: JSON.stringify({
                    email: email
                }),
            }
        );

        const data = await resp.json();
        const userExists = data.data.cursor.firstBatch && data.data.cursor.firstBatch.length > 0;
        return NextResponse.json({ user: userExists });
    } catch (error) {
        console.log(error);
    }
}
