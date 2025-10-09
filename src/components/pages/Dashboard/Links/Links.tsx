import DashboardSection from "@components/ui/DashboardSection";
import LinkPreview from "./LinkPreview";
import { Plus } from "lucide-react";


export default function Links () {
    
    function handleCreateLink () {
        console.log('it works');
    }
    
    return <div>
        <DashboardSection title={"Links"} 
            actionBtn={<>Create{<Plus />}</>}
            actionFn={handleCreateLink}    
        >
        {/* display only 9 per page */}
        <ul className="grid grid-cols-1 tablet:grid-cols-2 gap-sm">
            <li>
                <LinkPreview 
                    _id="asdf22aksks$ask"
                    original={"https://youtube.com"}
                    short={"ak22s"}
                    clicks={288}
                    createdAt={new Date()} 
                    status={"enabled"}        
                />
            </li>
            <li>
                <LinkPreview 
                _id="asdf22aksks$ask"
                    original={"https://youtube.com"}
                    short={"ak22s"}
                    clicks={288}
                    createdAt={new Date()} 
                    status={"enabled"}        
                />
            </li>
            <li>
                <LinkPreview 
                _id="asdf22aksks$ask"
                    original={"https://youtube.com"}
                    short={"ak22s"}
                    clicks={288}
                    createdAt={new Date()} 
                    status={"enabled"}        
                />
            </li>
            <li>
                <LinkPreview 
                _id="asdf22aksks$ask"
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