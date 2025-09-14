import Sidebar from "@components/layout/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout () {
    return <div className="">
        <Sidebar />
        <section>
            <Outlet/>
        </section>
    </div>
}