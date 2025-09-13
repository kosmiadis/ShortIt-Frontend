import { Link, type LinkProps } from "react-router-dom";

interface NavigationLinkI extends LinkProps {
    children: React.ReactNode
}

export default function NavigationLink ({to, children, ...props}: NavigationLinkI) {

    return <Link className="hover:text-accent-hover text-lg" to={to} {...props}>
        {children}
    </Link>
}