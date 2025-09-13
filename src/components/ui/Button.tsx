import type { ReactNode } from "react"

interface ButtonI extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    important?: boolean,
    children: ReactNode      
}   

export default function Button ({ important=false, children, ...props }: ButtonI) {    
    return <button
    className={`${important ? 'bg-accent-hover  hover:bg-accent-hover/90' : 'bg-bg-secondary'} hover:cursor-pointer hover:bg-accent-hover text-nowrap rounded-xl p-[10px] px-md text-md font-semibold text-text-primary shadow-md text-md`}
    {...props}
    >{children}</button>
}