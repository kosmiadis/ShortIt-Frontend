import Button from "@components/ui/Button";
import Input from "@components/ui/Input";
import NavigationLink from "@components/ui/NavigationLink";

export default function Register () {
    return <>
        <h1 className="text-2xl font-semibold">Register</h1>
        
        <form className=" flex flex-col gap-sm">
            
            <Input className="auth-input" name="firstName" placeholder="First Name" type="text" />
            <Input className="auth-input" name="lastName" placeholder="Last Name" type="text" />
            <Input className="auth-input" name="email" placeholder="Email" type="email" />
            <Input className="auth-input" name="password" placeholder="Password" type="password"/>
            <Button important >Register</Button>
        </form>

        <h2>Already have an account? <NavigationLink to={'/auth/login'}>Login</NavigationLink></h2>
    </>
}