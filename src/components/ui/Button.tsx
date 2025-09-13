import type { ReactNode } from "react"

interface ButtonI extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode      
}   

export default function Button ({ children, ...props }: ButtonI) {    
    return <button
    className={`bg-bg-secondary hover:cursor-pointer hover:bg-accent-hover text-nowrap rounded-lg p-[10px] px-md text-md font-semibold shadow-md text-md`}
    {...props}
    >{children}</button>
}