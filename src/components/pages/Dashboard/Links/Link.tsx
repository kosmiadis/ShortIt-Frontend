import { useLocation } from "react-router-dom"

export default function Link () {
    const { search } = useLocation();
    console.log(search);
    return <>
        
    </>
}