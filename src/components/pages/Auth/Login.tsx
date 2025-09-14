import Button from "@components/ui/Button";
import Input from "@components/ui/Input";
import NavigationLink from "@components/ui/NavigationLink";

export default function Login () {
    return <>
        
        <h1 className="text-2xl font-semibold">Login</h1>
        <form className=" flex flex-col gap-sm">
            <Input className="auth-input" placeholder="Email" type="email" />
            <Input className="auth-input" placeholder="Password" type="password"/>
            <Button important >Login</Button>
        </form>

        <h2>Don't have an account? <NavigationLink to={'/auth/signup'}>Create one</NavigationLink></h2>
    </>
}