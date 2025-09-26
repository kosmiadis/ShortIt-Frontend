import { endpoints } from "@config/endpoints";
import { API } from "@lib/axios";
import { displayError } from "@lib/notifications";
import { useMutation } from "@tanstack/react-query";
import { getZodErrorMessages } from "@util/getZodErrorMessages";
import z from "zod";
import type { ZodIssue } from "zod/v3";

const RegisterInputSchema = z.object({
    firstName: z.string().min(1, 'First name required').max(20, 'First name cannot be too long'),
    lastName: z.string().min(1, 'Last name required').max(20, 'Last name cannot be too long'),
    age: z.number().min(12, 'You must be 12 or older!'),
    email: z.email('Please enter a valid email').min(11, 'Email is required'),
    password: z.string().min(8, 'Password must be at least 8 characters')
})

type RegisterInputI = z.infer<typeof RegisterInputSchema>

export async function register (registerInput: RegisterInputI) {

    const credentialsValidation = RegisterInputSchema.safeParse({ ...registerInput });

    if (!credentialsValidation.success) {
        const errorMessages = getZodErrorMessages(credentialsValidation.error.issues as ZodIssue[]);
        return displayError(errorMessages);
    }

    const res = await API.post(endpoints.auth.register.getEndpoint(), {
        ...registerInput
    })
    return res.data;
}

export function useRegister () {
    return useMutation({
        mutationFn: (registerInput: RegisterInputI) => register({ ...registerInput })
    })
}
