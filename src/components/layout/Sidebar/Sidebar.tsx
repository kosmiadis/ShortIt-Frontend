import NavigationList from "./NavigationList";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar () {
    return <aside>
        <nav className="w-full p-md rounded-2xl bg-bg-tertiary/10 flex flex-col justify-between gap-xl">
            <NavigationList />
            <SidebarFooter />
        </nav>
    </aside>
}