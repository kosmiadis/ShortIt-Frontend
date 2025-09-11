import Header from "@components/layout/Header";
import { Outlet } from "react-router-dom";

export default function CoreLayout () {
    return <div className="w-full flex flex-col gap-8 min-h-screen max-w-(--max-width) mx-auto p-4 text-stone-800">
        <Header />
        <main className="flex w-full">
            <Outlet />
        </main>
    </div>
}