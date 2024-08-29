import { FunctionComponent, } from "react";
import { Outlet } from "react-router-dom";

export const Root: FunctionComponent = () => {

    return (
        <>
            <Outlet />
        </>
    )
}
