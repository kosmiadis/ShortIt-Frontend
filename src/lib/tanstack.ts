import { QueryClient, type DefaultOptions } from "@tanstack/react-query";


export const queryConfig = {
    queries: {
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: 1000 * 60
    }
} satisfies DefaultOptions

export const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 0 }, mutations: { retry: 0 }}
});