import { endpoints } from "@config/endpoints";
import { API } from "@lib/axios";
import z from "zod";

const RegisterInputSchema = z.object({
    firstName: z.string().min(1, 'First name required').max(20, 'First name cannot be too long'),
    lastName: z.string().min(1, 'Last name required').max(20, 'Last name cannot be too long'),
    age: z.number().min(16, 'You must be 16 or older!'),
    email: z.email('Please enter a valid email').min(11, 'Email is required'),
    password: z.string().min(8, 'Password must be at least 8 characters')
})

type RegisterInputI = z.infer<typeof RegisterInputSchema>

export async function register (registerInput: RegisterInputI) {

    const credentialsValidation = RegisterInputSchema.safeParse({ ...registerInput });

    if (!credentialsValidation.success) {
        console.log(credentialsValidation.error.issues)
        //display error notification
    }

    const res = await API.post(endpoints.auth.register.getEndpoint(), {
        ...registerInput
    })
    return res.data;
}
