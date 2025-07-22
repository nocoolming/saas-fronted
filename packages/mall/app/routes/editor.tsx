import { PuckEditor } from "siteEdit";

export default function Editor() {
  const initialData = {
    "content": [
      {
        "type": "HeadingBlock",
        "props": {
          "id": "HeadingBlock-1234",
          "title": "Mall Editor"
        }
      }
    ],
    "root": {}
  };

  return (
    <div>
      <h1>Mall Site Editor</h1>
      
      <PuckEditor
        data={initialData}
        onPublish={async (data) => {
          console.log('Mall editor published:', data);
          // 这里可以保存到 mall 的数据库
        }}
      />
    </div>
  );
}