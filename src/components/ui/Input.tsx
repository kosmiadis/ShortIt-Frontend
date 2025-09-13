import Button from "./Button";

interface InputI extends React.InputHTMLAttributes<HTMLInputElement> {
    withActionButton?: boolean;
    actionBtnText?: string | React.ReactNode;
    actionFn?: () => void;
}

export default function Input ({ withActionButton, actionBtnText, actionFn, ...props }: InputI) {
    const inputGlobalStyling = ` bg-bg-secondary text-md px-sm outline-0 border-0`
    
    if (!actionBtnText) throw new Error("Action button text cannot be empty");

    if (!actionFn) throw new Error("Action function cannot be undefined")
    
    if (withActionButton) return <div className="w-full grid grid-cols-[1fr_min-content]  shadow-accent bg-bg-secondary text-text-secondary rounded-md p-1.5">
        <input className={inputGlobalStyling} {...props} />
        <Button important onClick={actionFn}>{actionBtnText}</Button>
    </div>
    
    return <input {...props}/>
}