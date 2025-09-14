import NavigationLink from "@components/ui/NavigationLink"
import { ChartBar, CreditCard, Home, Link, Settings } from "lucide-react"

const DASHBOARD_NAV_LINKS = [
    { label: 'Dashboard', to: '/', icon: <Home />},
    { label: 'Links', to: '/', icon: <Link />},
    { label: 'Analytics', to: '/dashboard/analytics', icon: <ChartBar />},
    { label: 'Subscription', to: '/dashboard/subscription', icon: <CreditCard />},
    { label: 'Settings', to: '/dashboard/settings', icon: <Settings />},
]

export default function NavigationList () {
    return <ul className="flex flex-col">
        {DASHBOARD_NAV_LINKS.map((link, index) => <NavigationLink sidebarLink to={link.to} key={link.to+'_'+index}>
            <div className="flex items-center gap-1">
                {link.icon}
                {link.label}
            </div>
        </NavigationLink>)}
    </ul>
}