import { QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { queryClient } from "./lib/tanstack";
import SidebarContext from "@store/SidebarContext";

export default function AppProvider ({children}: { children: ReactNode }) {
    return <QueryClientProvider client={queryClient}>
        <SidebarContext>
            {children}
        </SidebarContext>
    </QueryClientProvider>
}