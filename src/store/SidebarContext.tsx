import { createContext, useState, type ReactNode } from "react";

type SidebarLinkType = 'Overview' | 'Links' | 'Analytics' | 'Subscription' | 'Settings';

interface SidebarCtxI {
    activeLink: SidebarLinkType
    setActiveLink: React.Dispatch<React.SetStateAction<SidebarLinkType>>
}


const SidebarCtx = createContext<SidebarCtxI>({
    activeLink: 'Overview',
    setActiveLink: () => {}
})


export default function SidebarContext ({ children }: { children: ReactNode }) {

    const [ activeLink, setActiveLink ] = useState<SidebarLinkType>('Overview');

    const sidebarCtxValue: SidebarCtxI = {
        activeLink,
        setActiveLink
    }

    return <SidebarCtx.Provider value={sidebarCtxValue}>
        {children}
    </SidebarCtx.Provider>
}