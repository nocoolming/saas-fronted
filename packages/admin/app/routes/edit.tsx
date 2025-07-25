import { PuckEditor } from "siteEdit";
import type { Route } from "./+types/edit";

export async function clientLoader({
  params,
}) {
  const res = await fetch(`http://localhost:8080/site`)
  const result = await res.json();

  return {
     result,
  }
}


export default function Edit({
  loaderData
}: Route.ComponentProps) {

  const { result } = loaderData;

  console.log('loaderData: ' + JSON.stringify(loaderData));

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
        onPublish={async (data) => {
          console.log('hello');
          console.log(data);
          console.log(JSON.stringify(data));
        }}
      />
    </div>
  )
}