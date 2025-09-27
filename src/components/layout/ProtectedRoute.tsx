import { paths } from "@config/paths";
import { useAuth } from "@store/useAuth";
import { useGetAuth } from "@queries/auth/useGetAuth";
import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute ({ children } : { children: React.ReactNode }) {

    const { data, isPending, isError } = useGetAuth();
    const { user, setUser } = useAuth();
    const location = useLocation();

    useEffect(() => {

        if (data) {
            console.log(data);
            setUser(data?.user);
        }
    }, [data, setUser, user])

    if (isPending) return <>Loading</>

    //if error redirect to login page and the when successful login occurs redirect to the previous
    //page that the user tried to load. *location.pathname indicates the previous url that the user
    //tried to access
    if (isError) return <Navigate to={paths.auth.login.getHref(location.pathname)}/> //add notification later

    if (data) return children;
}