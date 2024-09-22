import { FunctionComponent, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navigation/nav-bar";
import { BgFixed } from "../components/home/bg-fixed";
import { useAuth } from "../api/user/use-auth-api";

export const Root: FunctionComponent = () => {
    console.log('Root', 'render')
    const { initialRefreshAccessToken } = useAuth()
    useEffect(() => {
        initialRefreshAccessToken()
    }, [])
    return (
        <>
            <NavBar />
            <BgFixed />
            <Outlet />
        </>
    )
}
