import { useScreenSize } from "@hooks/useScreenSize";
import { useSidebar } from "@hooks/useSidebar";
import breakpoints from "@styles/breakpoints";
import { Link, type LinkProps } from "react-router-dom";

interface NavigationLinkI extends LinkProps {
    isActive?: boolean,
    sidebarLink?: boolean,
    children: React.ReactNode
}

export default function NavigationLink ({ to, isActive=false, sidebarLink=false, children, ...props }: NavigationLinkI) {
    return <Link className={`hover:text-accent-hover rounded-lg ${sidebarLink ? ' py-2 px-4 hover:bg-bg-secondary font-semibold' : undefined} ${isActive ? 'bg-bg-secondary text-accent-hover' : undefined} text-lg`} to={to} {...props}>
        {children}
    </Link>
}