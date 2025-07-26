import { Outlet } from "react-router";

export default function DefaultLayout(){
    return (
        <div>
            <h2>Layout page</h2>

            <Outlet /> 
        </div>
    )
}