import { displayNotification } from "@lib/notifications";
import { disableUrl } from "@lib/url/disableUrl";
import { useMutation } from "@tanstack/react-query";

export function useDisable () {
    return useMutation({
        mutationFn: ({urlId}: {
            urlId: string
        }) => disableUrl({ urlId }),
        onSuccess: (data) => {
            displayNotification(data.message, 'success');
        }
    })
}