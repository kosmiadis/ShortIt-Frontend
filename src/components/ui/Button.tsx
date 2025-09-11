import type { ReactNode } from "react"

interface ButtonI extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode      
}   

export default function Button ({ children }: ButtonI) {    
    return <button
    className={`hover:cursor-pointer hover:bg-accent/90 text-nowrap rounded-lg px-4 py-1 duration-175 bg-accent shadow-md text-white text-lg`}
    >{children}</button>
}