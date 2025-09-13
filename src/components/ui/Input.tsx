interface InputI extends React.InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactNode | null | string
}

export default function Input ({...props }: InputI) {
    return <input {...props}/>
}