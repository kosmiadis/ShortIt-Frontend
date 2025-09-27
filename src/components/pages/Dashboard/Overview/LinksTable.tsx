import NavigationLink from "@components/ui/NavigationLink";

export default function LinksTable () {
    return <div className="url-preview-table">
                    <div className="url-preview-table-head">
                        <p>Original URL</p>
                        <p>Short URL</p>
                        <p className="hidden laptop:flex">Clicks</p>
                        <p>Action</p>
                    </div>
                    <ul className="flex flex-col text-text-secondary">
                        <li className="url-preview-table-row">
                            <p className="text-nowrap overflow-hidden text-ellipsis">https://www.google.com/search?q=timer&oq=timer&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg70gEHMzQzajBqN6gCALACAA&sourceid=chrome&ie=UTF-8</p>
                            <p>shortit.com/sk2ss</p>
                            <p className="hidden laptop:flex">288</p>
                            <NavigationLink className="text-md hover:text-accent-hover" to={'/[url-details-page]'}>Edit</NavigationLink>
                        </li>
                        <li className="url-preview-table-row">
                            <p className="text-nowrap overflow-hidden text-ellipsis">https://www.google.com/search?q=timer&oq=timer&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg70gEHMzQzajBqN6gCALACAA&sourceid=chrome&ie=UTF-8</p>
                            <p>shortit.com/sk2ss</p>
                            <p className="hidden laptop:flex">288</p>
                            <NavigationLink className="text-md hover:text-accent-hover" to={'/[url-details-page]'}>Edit</NavigationLink>
                        </li>
                        <li className="url-preview-table-row">
                            <p className="text-nowrap overflow-hidden text-ellipsis">https://www.google.com/search?q=timer&oq=timer&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg70gEHMzQzajBqN6gCALACAA&sourceid=chrome&ie=UTF-8</p>
                            <p>shortit.com/sk2ss</p>
                            <p className="hidden laptop:flex">288</p>
                            <NavigationLink className="text-md hover:text-accent-hover" to={'/[url-details-page]'}>Edit</NavigationLink>
                        </li>
                    </ul>
                </div>
}