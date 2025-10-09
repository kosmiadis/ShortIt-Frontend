import { endpoints } from "@config/endpoints";
import { API } from "@lib/axios";
import { displayNotification } from "@lib/notifications";
import { getZodErrorMessages } from "@util/getZodErrorMessages";
import z from "zod";
import type { ZodIssue } from "zod/v3";

const urlSchema = z.object({
    originalUrl: z.url('Please input a valid url')
})

export async function shortUrl ({ originalUrl } : { originalUrl: string}) {
    //the method of creating urls (store a new url object in the db)

    //validate that the text is a url
    const isValidUrl = urlSchema.safeParse({ originalUrl });

    if (!isValidUrl.success) {
        const errors = getZodErrorMessages(isValidUrl.error.issues as ZodIssue[])
        return displayNotification(errors, 'error');
    }
    
    const res = await API.post(endpoints.urls.shorten.getEndpoint(), {
        originalUrl
    });

    return res.data;

}