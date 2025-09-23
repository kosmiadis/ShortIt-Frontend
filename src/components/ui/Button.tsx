import type { ReactNode } from "react"

interface ButtonI extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean,
    important?: boolean,
    children: ReactNode      
}   

export default function Button ({ important=false, disabled, children, ...props }: ButtonI) {    
    return <button
    disabled={disabled}
    style={{
        opacity: disabled ? '70%' : '100%'
    }}
    className={`${important ? 'btn-important' : undefined} ${disabled ? 'bg-muted': undefined}`}
    {...props}
    >{children}</button>
}