import { loginService } from "@/app/service/auth.service";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOption = {
    providers: [
        //CredentailsProvider use for login by email and password
        CredentialsProvider({
            //authorize use for to receive email and password
            async authorize(userInfo) {
                console.log("user info in next auth", userInfo);
                const newUserInfo = {
                    email: userInfo.email,
                    password: userInfo.password
                };

                //call login service
                const login = await loginService(newUserInfo);
                console.log(login)
                return login;
            },

        }),
    ],


    //use to set token into cookies
    callbacks: {
        async jwt({ token, account }) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            session.accessToken = token.accessToken
            return session
        }
    }


};
const handler = nextAuth(authOption);
export { handler as GET, handler as POST };