import { useScreenSize } from "@hooks/useScreenSize";
import NavigationList from "./NavigationList";
import SidebarFooter from "./SidebarFooter";
import breakpoints from "@styles/breakpoints";
import { useSidebar } from "@hooks/useSidebar"
import { X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar () {
    const { width } = useScreenSize();
    const { isSidebarOpen, hideSidebar } = useSidebar();

    function handleCloseMobileSidebar () {
        hideSidebar();
    }
    

    //creating hamburger menu for mobile
    if (width < breakpoints.laptop) return <aside className={`py-sm px-sm w-[60%] max-w-[400px] fixed top-0 ${isSidebarOpen ? 'right-0 opacity-100' : '-right-200'} duration-200 min-h-screen bg-bg-tertiary`}>
        <X size={36} onClick={handleCloseMobileSidebar} className="justify-self-end" />
        <div>
            <Link to={'/'}>
                <h2 className="font-semibold text-brand font-accent hover:text-accent-hover">Short<span className="text-accent-hover">It</span></h2>
            </Link>
            <div className="mt-sm flex flex-col gap-lg h-full">
                <NavigationList />
                <SidebarFooter />
            </div>
        </div>

    </aside>

    return <aside>
        <nav className="w-full p-md rounded-2xl bg-bg-tertiary flex flex-col justify-between gap-xl">
            <NavigationList />
            <SidebarFooter />
        </nav>
    </aside>
}