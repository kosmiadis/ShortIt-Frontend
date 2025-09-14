import Sidebar from "@components/layout/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout () {
    return <div className="grid grid-cols-[min-content_1fr] gap-4">
        <Sidebar />
        <section>
            <Outlet/>
        </section>
    </div>
}