interface CardI {
    title: string;
    text: string;
    icon?: React.ReactNode;
    image?: string | HTMLImageElement;
}

export default function Card ({ title, text, icon, image }: CardI) {

    if (!title) throw new Error('Title is missing');

    if (!text) throw new Error('Text is missing');

    const cardGlobalStyling = `rounded-lg bg-bg-secondary flex`

    return <article className={cardGlobalStyling}>
        {image && typeof image === 'string' 
            ? <img src={image} />
            : <>{image}</>
        }
        <div className="flex items-center gap-2">
            {icon}
            <h2 className="text-xl font-semibold text-text-primary">{title}</h2>
        </div>
        <p className="text-md text-text-secondary">{text}</p>
    </article>
}