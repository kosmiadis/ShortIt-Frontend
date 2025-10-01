import type { ReactElement, ReactNode } from "react"
import Button from "./Button";

type DashboardSectionProps = {
    title: string,
    actionBtn?: null | string | ReactElement;
    actionFn?: undefined | (() => void);
    children: ReactNode;
}

export default function DashboardSection ({ title, actionBtn=null, actionFn=undefined, children }: DashboardSectionProps) {
    
    
    if (actionBtn && !actionFn) throw new Error('Action function must be set for action button to be used.')
    
    if (actionFn && !actionBtn) throw new Error('Action function cannot be set without actionBtn attribute');

    return <section className="flex flex-col gap-sm">
        <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">{title}</h2>
            {actionBtn && <Button className="flex items-center gap-0.5" onClick={actionFn}>{actionBtn}</Button>}
        </div>
        {children}
    </section>
}