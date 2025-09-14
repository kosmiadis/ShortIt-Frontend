import { Outlet } from "react-router-dom";

export default function DashboardLayout () {
    return <div>

        {/* Sidebar */}
        {/* Dashboard */}
        <section>
            <Outlet/>
        </section>
    </div>
}