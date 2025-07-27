import { PuckEditor } from "siteEdit";
import type { Route } from "./+types/edit";
import type { Page } from 'service';
import {  PageServiceV5 } from 'service';

// export async function loader({
//   params,
// }: Route.LoaderArgs) {
//   const res = await fetch(`http://localhost:8080/site`)
//   const result = await res.json();

//   return {
//     result,
//   }
// }


export default function Edit({
  // loaderData
}: Route.ComponentProps) {

  // const { result } = loaderData;

  // console.log('loaderData: ' + JSON.stringify(loaderData));

  const d = {
    "content": [
      {
        "type": "HeadingBlock",
        "props": {
          "id": "HeadingBlock-1234",
          "title": "Hello, world"
        }
      }
    ],
    "root": {}
  };

  return (
    <div>
      <h1>Site editor</h1>

      <PuckEditor
        data={d}
        onPublish={async (data) => publish(data)}
      />
    </div>
  )
}

export async function publish(data) {
  const pageService: PageServiceV5 = new PageServiceV5();

  console.log(data);

  console.log(JSON.stringify(data));

  const dataString = JSON.stringify(data);

  const page: Page = {
    category: 'home',
    content: dataString,
  }

  const result = await pageService.insert(page);
}