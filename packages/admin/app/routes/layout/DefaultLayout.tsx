import { Outlet } from "react-router";

export default function DefaultLayout() {
    return (
        <div className="flex flex-col w-full justify-center items-center py-3">


            <Outlet />
        </div>
    )
}