import { Link, type LinkProps } from "react-router-dom";

interface NavigationLinkI extends LinkProps {
    sidebarLink?: boolean,
    children: React.ReactNode
}

export default function NavigationLink ({ to, sidebarLink=false, children, ...props }: NavigationLinkI) {

    return <Link className={`hover:text-accent-hover ${sidebarLink ? ' px-2 py-1 hover:bg-bg-secondary' : undefined} text-lg`} to={to} {...props}>
        {children}
    </Link>
}