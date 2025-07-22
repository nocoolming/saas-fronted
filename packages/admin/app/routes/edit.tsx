import { Puck } from "@measured/puck";
import { puckConfig as config } from "siteEdit";
import "@measured/puck/puck.css";


export default function Edit() {

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

      <Puck
        config={config}
        data={d}
        onPublish={async (data) => {

          console.log('hello');
        }} />
    </div>
  )
}