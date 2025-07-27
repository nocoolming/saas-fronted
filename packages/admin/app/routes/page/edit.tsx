import { PuckEditor } from "siteEdit";
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


export default function Edit({
  loaderData, params
}: Route.ComponentProps) {
  const {page} = loaderData;
  const { id } = params;

  console.log('loaderData: ' + JSON.stringify(page.content));

  const d = JSON.parse(page.content)

  const publish = async data => {
    const pageService: PageServiceV5 = new PageServiceV5();

    // console.log(data);  
    // console.log(JSON.stringify(data));
  
    const dataString = JSON.stringify(data);
  
    const params: Page = {
      ...page,
      category: 'home',
      content: dataString,
    }
  
    const result = await pageService.save(params);

    console.log(result);
  }


  return (
    <div className="w-full 5xl:w-5/6 md:mx-auto">
      <h1>Site editor</h1>

      <PuckEditor
        data={d}
        onPublish={async (data) => publish(data)}
      />
    </div>
  )
}

export async function publish(data) {


 
}