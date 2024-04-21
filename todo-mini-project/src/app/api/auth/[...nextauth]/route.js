import { loginService } from "@/app/service/auth.service";

export const authOption = {
    providers: [
         //login by email and password
        CredentialProvider({
           async authorize(userInfo){
            const newUserInfo = {
                email: userInfo,
                password: userInfo.password
            };
            //call login service

            console.log("user info", userInfo)
            const login = await loginService(newUserInfo);
            console.log(login)
           },
           
        }),
    ],

};
const handler = nextAuth(authOption);
export {handler as GET, handler as POST};