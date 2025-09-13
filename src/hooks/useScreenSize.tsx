import { useEffect, useState } from "react"

export function useScreenSize () {
    
    const [screen, setScreen] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    function handleScreenResize () {
        setScreen({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }


    useEffect(() => {
        window.addEventListener('resize', handleScreenResize)

        return () => {
            window.removeEventListener('resize', handleScreenResize);
        }
    }, [])
    
    return screen
}