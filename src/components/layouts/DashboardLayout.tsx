import Sidebar from "@components/layout/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import SidebarContext from "@store/SidebarContext";

export default function DashboardLayout () {
    return <div className="grid grid-cols-[min-content_1fr]">
        <SidebarContext>
            <Sidebar />
        </SidebarContext>
        <section>
            <Outlet/>
        </section>
    </div>
}