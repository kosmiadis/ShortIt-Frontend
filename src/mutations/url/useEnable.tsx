import { displayNotification } from "@lib/notifications";
import { enableUrl } from "@lib/url/enableUrl";
import { useMutation } from "@tanstack/react-query";

export function useEnable () {
    return useMutation({
        mutationFn: ({urlId}: {
            urlId: string
        }) => enableUrl({ urlId }),
        onSuccess: (data) => {
            displayNotification(data.message, 'success');
        }
    })
}