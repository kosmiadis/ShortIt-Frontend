import Button from "@components/ui/Button";
import Input from "@components/ui/Input";
import NavigationLink from "@components/ui/NavigationLink";
import { LoginInputSchema } from "@lib/auth/login";
import { useRegister } from "@lib/auth/register";
import { displayError } from "@lib/notifications";
import { getZodErrorMessages } from "@util/getZodErrorMessages";
import { useRef } from "react";
import type { ZodIssue } from "zod/v3";

export default function Register () {
    const { mutate: register, isPending } = useRegister();
    
    const firstNameInputRef = useRef<HTMLInputElement>(null);
    const lastNameInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const ageInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);
    

    function handleRegister (e: React.FormEvent) {
        e.preventDefault();
        
        const firstName = firstNameInputRef.current?.value;
        const lastName = lastNameInputRef.current?.value;
        const email = emailInputRef.current?.value;
        const password = passwordInputRef.current?.value;
        const age = ageInputRef.current?.value;

        if (!firstName || !lastName || !email || !password || !age) return displayError('Please fill in all empty fields')


        const isValid = LoginInputSchema.safeParse({ firstName, lastName, email, password, age: parseInt(age) })
        
        if (!isValid.success) {
            console.log()
            const errorMessages = getZodErrorMessages(isValid.error.issues as ZodIssue[]);
            displayError(errorMessages);
            return;
        }
        //data validation passed
        register({ firstName: firstName!, lastName: lastName!, email: email!, password: password!, age: parseInt(age)! })
    }

    return <>
        <h1 className="text-2xl font-semibold">Register</h1>
        
        <form onSubmit={handleRegister} className=" flex flex-col gap-sm">
            
            <Input ref={firstNameInputRef} disabled={isPending} className="auth-input" name="firstName" placeholder="First Name" type="text" />
            <Input ref={lastNameInputRef} disabled={isPending} className="auth-input" name="lastName" placeholder="Last Name" type="text" />
            <Input ref={emailInputRef} disabled={isPending} className="auth-input" name="email" placeholder="Email" type="email" />
            <Input ref={passwordInputRef} disabled={isPending} className="auth-input" name="password" placeholder="Password" type="password"/>
            <Input ref={ageInputRef} disabled={isPending} className="auth-input" name="age" placeholder="Age" type="number"/>

            <Button disabled={isPending} important >Register</Button>
        </form>

        <h2>Already have an account? <NavigationLink to={'/auth/login'}>Login</NavigationLink></h2>
    </>
}