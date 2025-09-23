import Button from "@components/ui/Button";
import Input from "@components/ui/Input";
import NavigationLink from "@components/ui/NavigationLink";
import { LoginInputSchema } from "@lib/auth/login";
import { useRef } from "react";
import { useLogin } from "@mutations/auth/useLogin";
import { getZodErrorMessages } from "@util/getZodErrorMessages";
import type { ZodIssue } from "zod/v3";
import { toast } from "sonner";

export default function Login () {
    
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const { mutate: login, isPending } = useLogin();
    
    function handleLogin (e: React.FormEvent) {
        e.preventDefault();
        const email = emailInputRef.current?.value;
        const password = passwordInputRef.current?.value;

        if (!email || !password) toast.error('Please fill in all empty fields')

        const isValid = LoginInputSchema.safeParse({ email, password })
        
        if (!isValid.success) {
            const errorMessages = getZodErrorMessages(isValid.error.issues as ZodIssue[]);
            errorMessages.forEach(errMsg => toast.error(errMsg))
            console.log(errorMessages);
            return;
        }
        //data validation passed
        login({ email: email!, password: password! })
    }

    return <>
        
        <h1 className="text-2xl font-semibold">Login</h1>
        <form onSubmit={handleLogin} className=" flex flex-col gap-sm">
            <Input ref={emailInputRef} className="auth-input" placeholder="Email" type="text" />
            <Input ref={passwordInputRef} className="auth-input" placeholder="Password" type="password"/>
            <Button type="submit" important disabled={isPending}>Login</Button>
        </form>

        <h2>Don't have an account? <NavigationLink to={'/auth/signup'}>Create one</NavigationLink></h2>
    </>
}