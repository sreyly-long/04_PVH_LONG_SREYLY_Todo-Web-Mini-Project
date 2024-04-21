
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";

const TodoListPage = () => {
    return(
        <main className="w-full flex ">
            <section>
                <SidebarComponent/>
            </section>
            <section>
                <NavbarComponent/>
            </section>
        </main>

    )
}
export default TodoListPage;