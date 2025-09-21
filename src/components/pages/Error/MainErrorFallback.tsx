import Button from "@components/ui/Button";

export default function MainErrorFallback () {
    return <div role="alert">
        <h1>Something unexpected happened :( Please try again later.</h1>
        <Button onClick={() => window.location.assign(window.location.origin)}>Refresh Page</Button>
    </div>
}