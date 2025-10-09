import { displayNotification } from "@lib/notifications";
import { shortUrl } from "@lib/url/shortUrl";
import { useMutation } from "@tanstack/react-query";

export function useShort () {
    return useMutation({
        mutationFn: ({ originalUrl }: {
            originalUrl: string
        }) => shortUrl({ originalUrl }),
        onSuccess: (data) => {
            displayNotification(data.message, 'success');
        }
    })
}