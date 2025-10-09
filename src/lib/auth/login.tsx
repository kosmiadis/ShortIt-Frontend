/* eslint-disable react-refresh/only-export-components */
import { endpoints } from "@config/endpoints";
import { API } from "@lib/axios";
import { displayNotification } from "@lib/notifications";
import { getZodErrorMessages } from "@util/getZodErrorMessages";
import z from "zod";
import type { ZodIssue } from "zod/v3";

export const LoginInputSchema = z.object({
    email: z.email('Please enter a valid email').nonempty('Email is required'),
    password: z.string().min(8, 'Password must be at least 8 characters')
})

type LoginInputI = z.infer<typeof LoginInputSchema>

export async function login ({ email, password } : LoginInputI) {
    const credentialsValidation = LoginInputSchema.safeParse({ email, password });

    if (!credentialsValidation.success) {
        const errors = getZodErrorMessages(credentialsValidation.error.issues as ZodIssue[]);
        throw displayNotification(errors, 'error');
    }

    const res = await API.post(endpoints.auth.login.getEndpoint(), {
        email,
        password
    })

    return res.data;
}