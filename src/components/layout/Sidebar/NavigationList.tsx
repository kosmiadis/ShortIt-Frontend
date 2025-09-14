import NavigationLink from "@components/ui/NavigationLink"
import { useScreenSize } from "@hooks/useScreenSize";
import { useSidebar } from "@hooks/useSidebar"
import breakpoints from "@styles/breakpoints";
import { ChartBar, CreditCard, Home, Link, Settings } from "lucide-react"
import type { SidebarLinkType } from "src/store/SidebarContext";

const DASHBOARD_NAV_LINKS = [
    { label: 'Overview', to: '/dashboard', icon: <Home />},
    { label: 'Links', to: '/dashboard/links', icon: <Link />},
    { label: 'Analytics', to: '/dashboard/analytics', icon: <ChartBar />},
    { label: 'Subscription', to: '/dashboard/subscription', icon: <CreditCard />},
    { label: 'Settings', to: '/dashboard/settings', icon: <Settings />},
]

export default function NavigationList () {

    const { activeLink, setActiveLink, hideSidebar } = useSidebar();
    const { width } = useScreenSize();

    function handleNavigationLinkClick (activeLink: SidebarLinkType) {
        setActiveLink(activeLink)
        if (width < breakpoints.laptop) hideSidebar();
    }

    return <ul className="flex flex-col gap-1.5">
        {DASHBOARD_NAV_LINKS.map((link, index) => <NavigationLink onClick={() => handleNavigationLinkClick(link.label as SidebarLinkType)} isActive={activeLink === link.label} sidebarLink to={link.to} key={link.to+'_'+index}>
            <div className="flex items-center gap-1">
                {link.icon}
                {link.label}
            </div>
        </NavigationLink>)}
    </ul>
}