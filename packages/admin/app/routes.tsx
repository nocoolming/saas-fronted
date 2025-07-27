'use client'
import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";
import { createBrowserRouter, RouterProvider } from "react-router";
import DefaultLayout from "./routes/layout/DefaultLayout";
import Home from "./routes/home";

export default
    [
        index("routes/home.tsx"),

        layout("routes/layout/DefaultLayout.tsx", [
            route("page/edit/:id", "routes/page/edit.tsx"),
            route("page", "routes/page/index.tsx")
        ]),


    ] satisfies RouteConfig;

