import { Outlet } from "react-router-dom";

export default function AuthLayout () {
    return <div className="w-full flex flex-col items-center">
        <section className="p-lg bg-bg-tertiary/10 rounded-2xl flex flex-col gap-sm max-w-[400px] mx-auto">
            <Outlet />
        </section>
    </div>
}