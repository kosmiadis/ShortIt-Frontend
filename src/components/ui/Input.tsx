import type { RefObject } from "react";
import Button from "./Button";

interface InputI extends React.InputHTMLAttributes<HTMLInputElement> {
    ref: RefObject<HTMLInputElement | null>,
    withActionButton?: boolean;
    actionBtnText?: string | React.ReactNode;
    actionFn?: () => void;
}

export default function Input ({ withActionButton=false, actionBtnText, actionFn, ref, ...props }: InputI) {
    const inputGlobalStyling = ` bg-bg-secondary text-md px-sm outline-0 border-0`
    
    if (withActionButton && !actionBtnText) throw new Error("Action button text cannot be empty");

    if (withActionButton && !actionFn) throw new Error("Action function cannot be undefined")
    
    if (withActionButton) return <div className="w-full grid grid-cols-[1fr_min-content]  shadow-accent bg-bg-secondary text-text-secondary rounded-xl p-1.5">
        <input className={inputGlobalStyling} {...props} />
        <Button important onClick={actionFn}>{actionBtnText}</Button>
    </div>
    
    return <input ref={ref} {...props}/>
}