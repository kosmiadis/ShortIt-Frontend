import { toast } from "sonner";

type NotificationType =  
    'success'| 
    'error'|
    'warning'|
    'info'|
    'promise'

export function displayNotification (msg: string | string[], type: NotificationType) {
    if (typeof msg === 'string') return toast[type](msg);
}

export function displayError (msg: string | string[]) {
    if (typeof msg === 'string') toast.error(msg);

    //if it is not a string the it would be an array
    (msg as string[]).forEach(m => toast.error(m))
}

// export function displaySuccess (msg: string | string[]) {
//     if (typeof msg === 'string') return toast.success(msg)

//     (msg as unknown as string[]).forEach(m => toast.success(m))
// }

