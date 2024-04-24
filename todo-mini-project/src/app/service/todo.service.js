
import { headerToken } from "../api/headerToken";
import { baseUrl } from "../utils/constants";

//Get All Workspace
export const getAllTodoWorkSpaceService = async () => {
    const header = await headerToken();
    console.log("header",header)
    try {      
        const res = await fetch(
            `${baseUrl}/api/todo/v1/workspaces`,  
            {
                headers : header,
            }   
        );     
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }       
        console.log("getAll",res)
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
