import Header from "@components/layout/Header";
import NavigationLink from "@components/ui/NavigationLink";

export default function PageNotFound () {
    return <div className="flex flex-col gap-xxl">
        <Header />
        <div className="p-sm text-center flex flex-col items-center gap-sm justify-center">
            <h1 className="text-3xl font-semibold">Unfortunately, the page you are looking for does not exist.</h1>
            <p className="text-xl">Go back to <NavigationLink className='text-md hover:text-accent' to={'/'}>Home Page</NavigationLink></p>
    </div></div>
}