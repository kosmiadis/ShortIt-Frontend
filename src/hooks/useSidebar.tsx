import { useContext } from "react"
import { SidebarCtx } from "@store/SidebarContext";

export function useSidebar () {
    return useContext(SidebarCtx);
}