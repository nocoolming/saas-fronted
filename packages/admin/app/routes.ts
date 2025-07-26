import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default
    [
        index("routes/home.tsx"),
        
        layout("routes/layout/DefaultLayout.tsx", [
            route("edit", "routes/edit.tsx"),
        ]),
       
        
    ] satisfies RouteConfig;
    

