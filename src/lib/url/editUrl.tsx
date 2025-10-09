import { endpoints } from "@config/endpoints";
import { API } from "@lib/axios";
import { displayNotification } from "@lib/notifications";
import { getZodErrorMessages } from "@util/getZodErrorMessages";
import z from "zod";
import type { ZodIssue } from "zod/v3";

const editUrlSchema = z.object({
    title: z.string().nonempty(),
    description: z.string().nonempty()
})

export async function editUrl ({ urlId, title, description }: {urlId: string, title: string, description: string}) {
    if (!urlId) return displayNotification('Something went wrong', 'error');

    const infoIsValid = editUrlSchema.safeParse({ title, description });

    if (!infoIsValid.success) {
        const errors = getZodErrorMessages(infoIsValid.error.issues as ZodIssue[]);
        return displayNotification(errors, 'error');
    }

    const res = await API.post(endpoints.urls.edit.getEndpoint(urlId), {
        title, 
        description
    })

    return res.data;
}