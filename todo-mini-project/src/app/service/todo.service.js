import { getServerSession } from "next-auth";
import { authOption } from "../api/auth/[...nextauth]/route";

//get token from cookie
const token = getServerSession(authOption);
console.log("token is",token?.user?.token)

//Get All Workspace
export const getAllTodoWorkSpaceService = async () => {
    try {
        const res = await fetch('http://110.74.194.123:8989/api/todo/v1/workspaces');
        
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

//Insert Workspace
export const insertTodoWorkSpace = async () => {
    try {
        const res = await fetch('http://110.74.194.123:8989/api/todo/v1/workspaces');
        
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
    
}
