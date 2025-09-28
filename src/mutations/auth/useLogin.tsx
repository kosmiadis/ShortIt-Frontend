import { login } from "@lib/auth/login";
import { displayNotification } from "@lib/notifications";
import { useMutation } from "@tanstack/react-query";

import { useLocation, useNavigate } from "react-router-dom";

export function useLogin () {

    const location = useLocation();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: ({
            email, 
            password
        }: { email: string, password: string }) => login({ email, password }),
        onSuccess: () => {
            //redirect to "redirectTo" parameter
            const redirectTo = decodeURIComponent(location.search.split('=')[1])
            navigate(redirectTo);
            displayNotification('Login successful', 'success');
        }
    })
}