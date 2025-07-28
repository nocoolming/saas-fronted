import {  PuckPreview } from "siteEdit";
import type { Route } from "./+types/edit";
import type { Page } from 'service';
import { PageServiceV5, serviceFactory } from 'service';

export async function clientLoader({ params }
    : Route.ClientLoaderArgs
) {
    // console.log(params.id);
    // debugger;

    const { id } = params;

    const pageService: PageServiceV5
        = serviceFactory.get('pageService');

    const page: Page = await pageService.get(id);
    // console.log(page);
    return {
        page,
    }
}

export default function Preview({
    loaderData, params
}: Route.ComponentProps) {
    const { page } = loaderData;

    const d = JSON.parse(page.content)
    return (
        <PuckPreview data={d} />
    )
}