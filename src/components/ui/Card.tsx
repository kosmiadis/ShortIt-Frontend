import type { ReactNode } from "react";

interface CardI {
    featured?: {isFeatured: boolean, featuredText: string };
    title: string;
    body: string | ReactNode;
    icon?: ReactNode;
    image?: string | HTMLImageElement;
}

export default function Card ({ featured={isFeatured: false, featuredText: ''}, title, body, icon, image }: CardI) {

    if (!title) throw new Error('Title is missing');

    if (!body) throw new Error('Body is missing');

    const cardGlobalStyling = `rounded-lg ${featured.isFeatured ? 'outline-2 outline-accent scale-110 z-100' : 'bg-bg-secondary'}  flex flex-col gap-2 max-w-[340px] p-md`

    return <article className={cardGlobalStyling}>
        {featured.isFeatured && <h3 className="text-sm font-bold font-accent text-text-primary">{featured.featuredText}</h3>}
        
        {image && typeof image === 'string' 
            ? <img src={image} />
            : <>{image}</>
        }
        <div className="flex items-center gap-2">
            {icon}
            <h2 className="text-gradient text-2xl font-semibold text-text-primary">{title}</h2>
        </div>
        {body && typeof body === 'string' 
            ? <p className="text-md text-text-secondary">{body}</p>
            : <>{body}</>
        }
    </article>
}