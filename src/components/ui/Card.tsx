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

    return <article className={featured.isFeatured ? 'card-default card-featured' : 'card-default'}>
        {featured.isFeatured && <h3 className="text-sm font-bold font-accent text-text-primary">{featured.featuredText}</h3>}
        
        {image && typeof image === 'string' 
            ? <img src={image} />
            : <>{image}</>
        }
        <div className="flex-column-center">
            {icon}
            <h2 className="card-heading text-gradient">{title}</h2>
        </div>
        {body && typeof body === 'string' 
            ? <p className="text-md text-text-secondary">{body}</p>
            : <>{body}</>
        }
    </article>
}