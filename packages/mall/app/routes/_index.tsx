import { json, type MetaFunction } from "@remix-run/node";
import { PuckPreview } from "siteEdit";
import Site, { DomainServiceV5, Page, PageServiceV5, serviceFactory } from 'service';
import { useLoaderData } from "@remix-run/react";
import { ClientOnly } from "remix-utils/client-only";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async ({ request }) => {
  const domainService: DomainServiceV5 = serviceFactory.get('domainService');
  const pageService: PageServiceV5 = serviceFactory.get('pageService');

  const site: Site = await domainService.getSite(request);
  // console.log("site id: " + site.id);
  const pages = await pageService.getPagesBySiteId(site.id);
  const page: Page = pages.filter(p => p.category === 'home')[0];


  return {
    site,

    page,
  }
}

export default function Index() {
  const { page } = useLoaderData();

  // console.log(JSON.stringify(page));
  // console.log(page.content);

  const d = JSON.parse(page.content)
  return (
    <div className="flex flex-col h-screen items-center ">
      <p>Home</p>
      <ClientOnly fallback={<div>Loading...</div>}>
        {() => <PuckPreview data={d} />}
      </ClientOnly>
    </div>
  );
}
