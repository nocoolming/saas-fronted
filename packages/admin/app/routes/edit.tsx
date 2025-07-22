import { Puck } from "@measured/puck";

import { TextBlock } from "siteEdit";
import "@measured/puck/puck.css";
// import React from "react";
import config from "../../puck.config";

// import type { Config } from "@measured/puck";

// type Components = {
//   HeadingBlock: {
//     title: string;
//   };
//   TextBlock: { text: string };
// };

// const config: Config<Components> = {
//   components: {
//     HeadingBlock: {
//       fields: {
//         title: { type: "text" },
//       },
//       defaultProps: {
//         title: "Heading",
//       },
//       render: ({ title }) => (
//         <div style={{ padding: 64 }}>
//           <h1>{title}</h1>
//         </div>
//       ),
//     },
//     TextBlock: {
//       fields: {
//         text: { type: 'text' },
//       },
//       defaultProps: {
//         text: 'test',
//       },
//       render: ({ text }) => (
//         <TextBlock text={text} />
//       ),
//     },
//   },
// };

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