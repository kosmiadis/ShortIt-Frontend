import { Link } from "react-router-dom"
import { useScreenSize } from "@hooks/useScreenSize"
import Button from "@components/ui/Button";
import NavigationLink from "@components/ui/NavigationLink";
import breakpoints from "@styles/breakpoints";


export default function Header () {
    const { width } = useScreenSize();

    function handleScrollIntoView (containerId: string) {
        const containerRectBounds = document.getElementById(containerId)!.getBoundingClientRect();
        const scrollTopCord = containerRectBounds.bottom - containerRectBounds.y - 50
        scrollTo({ behavior: 'smooth', top: scrollTopCord })
    }
    

    return <header className="p-sm flex justify-between items-center">
        <Link to={'/'}>
            <h2 className=" font-semibold text-brand font-accent hover:text-accent-hover">Short<span className="text-accent-hover">It</span></h2>
        </Link>

        {/* display only if screen is bigger than a laptop */}
        {width >= breakpoints.laptop 
        && 
        <nav>
            <ul className="flex gap-4">
                <li><NavigationLink onClick={() => handleScrollIntoView('features')} to={{pathname: '/', hash: '#features' }}>Features</NavigationLink></li>
                <li><NavigationLink onClick={() => handleScrollIntoView('pricing')} to={{ pathname: '/', hash: '#pricing' }}>Pricing</NavigationLink></li>
            </ul>
        </nav>
        }

        <Button>Sign In</Button>
    </header>
}