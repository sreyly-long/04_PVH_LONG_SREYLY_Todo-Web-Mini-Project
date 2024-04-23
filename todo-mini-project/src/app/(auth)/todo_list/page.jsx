

import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import Image from "next/image"
import wel from "../../../../public/assets/icons/welcome.png"

const TodoListPage = async () => {
    return(
        <main className="w-full flex gap-5">
            <section>
                 <SidebarComponent/>             
            </section>
            <section className="ml-20">
                <NavbarComponent/>
                <div className="w-full"> 
                    <Image className="block m-auto" src={wel} width={300} height={200} alt="no pic"/>
                </div>
            </section>
        </main>

    )
}
export default TodoListPage;