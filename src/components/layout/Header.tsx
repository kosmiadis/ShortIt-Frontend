import { Link } from "react-router-dom"
import { useScreenSize } from "@hooks/useScreenSize"
import Button from "@components/ui/Button";

export default function Header () {
    const { width } = useScreenSize();

    return <header className="flex justify-between">
        <Link to={'/'}>
            <h2 className="text-3xl font-accent">ShortIt</h2>
        </Link>

        <nav>
            <ul className="flex gap-2">
                <li><Link to={'/auth/login'}><Button>Login</Button></Link></li>
                <li><Link to={'/auth/signup'}><Button>Signup</Button></Link></li>
            </ul>
        </nav>
    </header>
}