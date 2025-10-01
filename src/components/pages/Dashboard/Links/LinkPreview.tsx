import NavigationLink from "@components/ui/NavigationLink";
import { displayNotification } from "@lib/notifications";
import type { Url } from "@types/api";
import { Check, Paperclip } from "lucide-react";
import { useState } from "react";

type LinkPreviewProps = Pick<Url, 'original' | 'short' | 'clicks' | 'status' |'createdAt'>

export default function LinkPreview ({ original, short, clicks, status, createdAt }: LinkPreviewProps ) {

    const [isCopied, setIsCopied ] = useState(false);
    
    function handleCopyToClipBoard (text: string) {
        navigator.clipboard.writeText(text);
        setIsCopied(true);
        displayNotification('Short url copied successfuly', 'success');
    }

    return <article className="rounded-xl bg-bg-secondary p-sm flex flex-col gap-sm overflow-x-hidden">
        <div className="flex justify-between items-center">
            <h2 className="flex font-semibold text-4xl items-end gap-[2px] text-accent">{clicks}<span className="text-sm mb-1 text-stone-300">clicks</span></h2>
            <span className="text-stone-400">{status}</span>
        </div>
        
        <div className="flex items-end justify-between">
            <div className="flex flex-col gap-sm">
                <div className="flex gap-sm items-center"><NavigationLink to={`https://shortit/${short}`}><h2>shortit/{short} </h2></NavigationLink>{!isCopied ? <Paperclip className="hover:cursor-pointer" onClick={() => handleCopyToClipBoard(`https://shortit/${short}`)} size={18}/> : <Check className="text-success" />}</div>
                <NavigationLink to={original}><p className="text-nowrap text-[15px] hover:text-stone-500 w-full text-ellipsis text-stone-400">{original}</p></NavigationLink>
            </div>
            <div>
                <p className="text-stone-400">{new Date(createdAt).toLocaleDateString()}</p>
            </div>
        </div>
    </article>
}