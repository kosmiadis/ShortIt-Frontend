import type { ReactNode } from "react"

interface ButtonI extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    important?: boolean,
    children: ReactNode      
}   

export default function Button ({ important=false, children, ...props }: ButtonI) {    
    return <button
    className={important ? 'btn-important' : undefined}
    {...props}
    >{children}</button>
}