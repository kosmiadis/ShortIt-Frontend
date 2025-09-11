import Button from "@components/ui/Button";

export default function Home () {
    return <div className="flex justify-center outline-2 w-full min-h-full">
        <article className="flex flex-col gap-4">
            <div className="flex flex-col">
                <h1 className="font-accent text-6xl font-semibold"><span className="font-bold text-accent">Quick</span> and <span className="font-bold text-accent">Easy</span></h1>
                <h1 className="font-accent text-7xl font-semibold">Url Shortening</h1>
                <p className="text-xl text-stone-600 font-accent ">Track Traffic and view Analytics.</p>
            </div>
            <div className="flex max-w-[620px] gap-2">
                <input type="text" placeholder="Enter url..." className="w-full border-1 border-stone-300 rounded-md px-3 placeholder:text-lg text-lg py-2 outline-accent"/>
                <Button>Short Url</Button>
            </div>
        </article>
    </div>
}