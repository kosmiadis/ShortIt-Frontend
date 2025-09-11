import Header from "@components/layout/Header";
import { Outlet } from "react-router-dom";

export default function CoreLayout () {
    return <div className="w-full max-w-(--max-width) mx-auto p-4">
        <Header />
        <main>
            <Outlet />
        </main>
    </div>
}