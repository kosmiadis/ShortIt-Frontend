import DashboardSection from "@components/ui/DashboardSection";
import NavigationLink from "@components/ui/NavigationLink";
import Table from "@components/ui/Table/Table";
import LinkPreview from "./LinkPreview";


export default function Links () {
    return <div>
        <DashboardSection title={"Links"} >

        {/* display only 9 per page */}
        <ul className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-sm">
            <li>
                <LinkPreview 
                    original={"https://youtube.com"}
                    short={"ak22s"}
                    clicks={288}
                    createdAt={new Date()} 
                    status={"enabled"}        
                />
            </li>
            <li>
                <LinkPreview 
                    original={"https://youtube.com"}
                    short={"ak22s"}
                    clicks={288}
                    createdAt={new Date()} 
                    status={"enabled"}        
                />
            </li>
            <li>
                <LinkPreview 
                    original={"https://youtube.com"}
                    short={"ak22s"}
                    clicks={288}
                    createdAt={new Date()} 
                    status={"enabled"}        
                />
            </li>
            <li>
                <LinkPreview 
                    original={"https://youtube.com"}
                    short={"ak22s"}
                    clicks={288}
                    createdAt={new Date()} 
                    status={"enabled"}        
                />
            </li>
        </ul>
        </DashboardSection>

        {/* <DashboardSection title={'Links'} >
            <Table headerData={['Original URL', 'Short URL', 'Clicks', 'Action']} data={[
                            ['http:asdfasdf', 'shortIt/sk2k', 5, <NavigationLink to={''}>Edit</NavigationLink>]
                        ]}/>
        </DashboardSection> */}
    </div>
}