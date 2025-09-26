import { toast } from "sonner";

export function displayError (msg: string | string[]) {
    if (typeof msg === 'string') toast.error(msg);

    //if it is not a string the it would be an array
    (msg as string[]).forEach(m => toast.error(m))
}