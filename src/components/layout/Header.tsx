import { Link } from "react-router-dom"
import { useScreenSize } from "@hooks/useScreenSize"
import Button from "@components/ui/Button";
import NavigationLink from "@components/ui/NavigationLink";
import breakpoints from "@styles/breakpoints";
import { useEffect, useRef, useState } from "react";


export default function Header () {
    const { width } = useScreenSize();
    const headerRef = useRef<HTMLElement>(null);
    const [pageIsScrolled, setPageIsScrolled] = useState(false);

    // for handling smooth header stickiness when scrolling
    useEffect(() => {
        function checkIfScrolled () {
            if (scrollY > 100) return setPageIsScrolled(true); 

            //if user scrolls to the top reset styling
            if (scrollY === 0) return setPageIsScrolled(false);
        }

        window.addEventListener('scroll', checkIfScrolled);

        return () => {
            window.removeEventListener('scroll', checkIfScrolled);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrollY])

    function handleScrollIntoView (containerId: string) {
        const containerRectBounds = document.getElementById(containerId)!.getBoundingClientRect();
        const scrollTopCord = containerRectBounds.bottom - containerRectBounds.y - 50
        scrollTo({ behavior: 'smooth', top: scrollTopCord })
    }

    

    return <header ref={headerRef} className={`p-sm duration-100 flex justify-between items-center ${pageIsScrolled ? 'z-100 sticky top-0 bg-bg-secondary' : 'top-0'}`}>
        <Link to={'/'}>
            <h2 className=" font-semibold text-brand font-accent hover:text-accent-hover">Short<span className="text-accent-hover">It</span></h2>
        </Link>

        {/* display only if screen is bigger than a laptop */}
        {width >= breakpoints.laptop 
        && 
        <nav>
            <ul className="flex gap-4">
                <li><NavigationLink onClick={() => scrollTo({top: 0, behavior: 'smooth'})} to={'/'}>Features</NavigationLink></li>
                <li><NavigationLink onClick={() => handleScrollIntoView('features')} to={{pathname: '/', hash: '#features' }}>Features</NavigationLink></li>
                <li><NavigationLink onClick={() => handleScrollIntoView('pricing')} to={{ pathname: '/', hash: '#pricing' }}>Pricing</NavigationLink></li>
            </ul>
        </nav>
        }

        <Button important={pageIsScrolled}>Sign In</Button>
    </header>
}