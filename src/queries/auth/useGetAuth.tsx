import { getAuth } from "@lib/auth/getAuth";
import { useQuery } from "@tanstack/react-query";

export function useGetAuth () {
    return useQuery({
        queryKey: ['auth', 'me'],
        queryFn: getAuth
    })
}