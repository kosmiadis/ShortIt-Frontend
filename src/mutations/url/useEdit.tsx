import { editUrl } from "@lib/url/editUrl";
import { useMutation } from "@tanstack/react-query";

export function useEdit () {
    return useMutation({
        mutationFn: ({ urlId, title, description
        }: {
            urlId: string,
            title: string,
            description: string
        }) => editUrl({ 
            urlId,
            title,
            description
        })
    })
}