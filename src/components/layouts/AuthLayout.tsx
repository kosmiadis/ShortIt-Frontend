import { Outlet } from "react-router-dom";

export default function AuthLayout () {
    return <div className="w-full flex flex-col items-center">
        <section className="p-lg rounded-2xl flex flex-col gap-sm max-w-[600px] mx-auto">
            <Outlet />
        </section>
    </div>
}