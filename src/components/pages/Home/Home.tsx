import Input from "@components/ui/Input";

export default function Home () {
    
    function handleCTAUrlShorten () {

    }
    
    return <div className="flex justify-center w-full min-h-full">
        <article className="flex flex-col gap-4">
            <div className="text-center ">
                <h1 className="text-6xl font-bold text-gradient">Quick, Easy and Modern</h1>
                <h1 className="text-5xl font-bold ">Url Shortening</h1>
            </div>
            
            <Input type="url" placeholder="Enter a Long Url..." withActionButton actionBtnText={"Shorten"} actionFn={handleCTAUrlShorten} />
         
        </article>
    </div>
}