import { Outlet } from "react-router-dom";

export default function AuthLayout () {
    return <div>
        <section>
            <Outlet />
        </section>
    </div>
}