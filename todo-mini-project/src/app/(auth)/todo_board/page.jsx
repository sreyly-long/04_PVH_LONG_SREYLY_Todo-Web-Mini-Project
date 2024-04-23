import ListBoardComponentHeader from "@/components/ListBoardComponentHeader"
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import TodoCardComponent from "@/components/TodoCardComponent";

const TodoBorad = () => {
    return (
        <main className="w-full flex gap-5">
            <section>
                <SidebarComponent />
            </section>
            <section className="ml-20">
                <NavbarComponent />
                <div className="mt-4">
                    <ListBoardComponentHeader />
                </div>
                <div className=" w-full h-[250px]">
                    <div className="grid-col-md-4 container flex gap-3">
                    <TodoCardComponent/>
                    <TodoCardComponent/>
                    <TodoCardComponent/>
                    <TodoCardComponent/>

                    </div>
              
                </div>
            </section>

        </main>
    )
}
export default TodoBorad;