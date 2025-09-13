import Header from "@components/layout/Header";
import { Outlet } from "react-router-dom";

export default function CoreLayout () {
    return <div className="bg-bg-primary text-text-primary **:duration-100 w-full flex flex-col gap-8 min-h-screen">
        <Header />
        <main className="flex p-sm w-full max-w-(--max-width) mx-auto">
            <Outlet />
        </main>
    </div>
}