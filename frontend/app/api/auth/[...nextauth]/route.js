import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const { email, password } = credentials
                const url = `https://us-west-2.aws.neurelo.com/rest/users?filter={"email": "${email}"}`

                console.log("URL===== ", url)
                
                try {
                    const resp = await fetch(
                        url,
                        {
                            method: "GET",
                            headers: {
                                "X-API-KEY": process.env.NEURELO_VALUE
                            }
                        }
                    );

                    const data = await resp.json()
                    console.log("DATA=====", data)
                    const user = data.data[0]

                    console.log("USER ===", user);
                    if (data.data.length == 0) {
                        return null
                    }

                    const passMatch = await bcrypt.compare(password, user.password);
                    if (!passMatch) {
                        return null
                    }

                    return user;
                } catch (error) {
                    console.log(error)
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
