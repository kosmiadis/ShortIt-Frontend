import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";
import { queryConfig } from "./lib/tanstack";
import SidebarContext from "@store/SidebarContext";
import { ErrorBoundary } from "react-error-boundary";
import MainErrorFallback from "@components/pages/Error/MainErrorFallback";
import { Toaster } from "sonner";

export default function AppProvider ({ children }: { children: ReactNode }) {

    //Implementing lazy initialization on Query Client instance
    //This allows the queryClient to not reinitialize on each render
    //Sparing computational resources (cache, memory etc...)    
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: queryConfig
    }))


    return <ErrorBoundary fallback={<MainErrorFallback  />}>
        <QueryClientProvider client={queryClient}>
            <Toaster richColors position="top-center" closeButton theme="dark"/>
                <SidebarContext>
                    {children}
                </SidebarContext>
        </QueryClientProvider>
    </ErrorBoundary>
}