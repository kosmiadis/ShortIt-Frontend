import type { ReactNode } from "react"

interface ButtonI extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode      
}   

export default function Button ({ children, ...props }: ButtonI) {    
    return <button
    className={`hover:cursor-pointer hover:bg-accent/90 text-nowrap rounded-lg px-4 py-1 duration-175 shadow-md text-white text-lg`}
    {...props}
    >{children}</button>
}