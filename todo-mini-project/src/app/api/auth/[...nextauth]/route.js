import { loginService } from "@/app/service/auth.service";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { redirect } from "next/dist/server/api-utils";


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
                console.log(login);
                if(login.status === 400) {
                    redirect("/register");
                }
                console.log("login",login)
                return login;
            },

        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: "/login",
    },
    callbacks: {
      async jwt({ token, user }) {
        return { ...token, ...user };
      },
      async session({ session, token }) {
        session.user = token;
        return session;
      },
    },
  };
const handler = nextAuth(authOption);
export { handler as GET, handler as POST };