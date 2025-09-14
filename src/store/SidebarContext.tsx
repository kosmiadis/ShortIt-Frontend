import { createContext, useState, type ReactNode } from "react";

export type SidebarLinkType = 'Overview' | 'Links' | 'Analytics' | 'Subscription' | 'Settings';

interface SidebarCtxI {
    activeLink: SidebarLinkType;
    setActiveLink: React.Dispatch<React.SetStateAction<SidebarLinkType>>;
    isSidebarOpen: boolean;
    showSidebar: () => void;
    hideSidebar: () => void;

}


// eslint-disable-next-line react-refresh/only-export-components
export const SidebarCtx = createContext<SidebarCtxI>({
    activeLink: 'Overview',
    setActiveLink: () => {},
    isSidebarOpen: false,
    showSidebar: () => {},
    hideSidebar: () => {},
})


export default function SidebarContext ({ children }: { children: ReactNode }) {

    const [ activeLink, setActiveLink ] = useState<SidebarLinkType>('Overview');
    const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);


    function showSidebar () {
        setIsSidebarOpen(true);
    }

    function hideSidebar () {
        setIsSidebarOpen(false);
    }

    const sidebarCtxValue: SidebarCtxI = {
        activeLink,
        setActiveLink,
        isSidebarOpen,
        showSidebar,
        hideSidebar
        
    }

    return <SidebarCtx.Provider value={sidebarCtxValue}>
        {children}
    </SidebarCtx.Provider>
}