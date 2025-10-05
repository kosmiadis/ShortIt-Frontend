import Sidebar from "@components/layout/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout () {
    return <div className="grid  grid-cols-1  laptop:grid-cols-[min-content_1fr] gap-sm">
        <Sidebar />
        <section>
            <Outlet/>
        </section>
    </div>
}