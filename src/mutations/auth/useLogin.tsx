import { login } from "@lib/auth/login";
import { useMutation } from "@tanstack/react-query";

export function useLogin () {
    return useMutation({
        mutationFn: ({
            email, 
            password
        }: { email: string, password: string }) => login({ email, password })
    })
}