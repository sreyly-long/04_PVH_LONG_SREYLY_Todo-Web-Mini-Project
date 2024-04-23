import { getAllTodoWorkSpaceService, insertTodoWorkSpace } from "@/app/service/todo.service";
import Image from "next/image";
import { ModalComponent } from "./ModalComponent";
import Link from "next/link";


// Define the SidebarComponent function
const SidebarComponent = async () => {


  return (
    <main>
      <div className="pl-10 mt-6 h-screen">
        {/* Header */}
        <div className="flex justify-between">
          <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
          <Image src={"/assets/icons/arrow.svg"} width={25} height={30} />
        </div>

        {/* Workspace */}
        <div className="flex justify-between mt-10">
          <h1 className="uppercase text-gray font-bold">workspace</h1>
          <ModalComponent/>   
        </div>

        {/* Render each workspace */}
        <div className="flex items-center mt-5 w-full">
          <div className="rounded-full w-4 h-4 bg-workingOn"></div>       
            {/* {workspaceData.data.map((data)=>( */}
                <div className="flex justify-between w-full pl-3" >
                <p>Web Design</p>
                   <Image src={"/assets/icons/tabler_dots.svg"} width={25} height={30} alt="Not Found" />
                   </div>             
            {/* ))}         */}
        </div>

        {/* Favorite */}
        <div className="flex justify-between mt-10">
          <h1 className="uppercase text-gray font-bold">favorite</h1>
          <Image src={"/assets/icons/favorite.svg"} width={22} height={22} />
        </div>

        {/* Hardcoded favorite workspace */}
        <div className="flex items-center mt-5 w-full">
          <div className="rounded-full w-4 h-4 bg-workingOn"></div>
          <div className="flex justify-between w-full pl-3">
            <p>GKS Scholarship</p>
          </div>
        </div>
      </div>
    </main>
  )
}
export default SidebarComponent;


