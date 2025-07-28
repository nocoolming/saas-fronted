'use client'

import { serviceFactory, ServiceSimpleFactory, type PageServiceV5 } from "service";
import type { Route } from "./+types/index";
import { Link } from "react-router";

export async function clientLoader({ params }
    : Route.ClientLoaderArgs
) {
    // console.log(params);
    const pageService: PageServiceV5 =
        serviceFactory.get('pageService');

    const pages = await pageService.getPagesBySiteId('1');

    // console.log("This is page index")
    // console.log(JSON.stringify(pages));

    return {
        title: 'title',
        pages,

    }
}

export default function PageIndex({
    loaderData
}: Route.ComponentProps) {
    const { pages } = loaderData;



    return (
        <div className="container">
            <h1 className="py-3 border-b-3 border-cyan-800 mb-1">
                Page index</h1>

            {
                <ol>
                    {pages.map(p => (
                        <li key={p.id}>
                            <Link to={`edit/${p.id}`}>
                                <span>{p.category}</span>
                            </Link>

                            <Link to={`preview/${p.id}`}>
                                <span>Preview {p.category}</span>
                            </Link>
                        </li>)
                    )}
                </ol>

            }


        </div>
    )
}