import { storiesOf } from "@storybook/react";
import axios from "axios";
import * as React from "react";
import { useAsyncEffect } from "../src";
import ShowDocs from "./util/ShowDocs";

interface ItemType {
  author: string;
  download_url: string;
  height: number;
  id: string;
  url: string;
  width: number;
}
const Demo = () => {
  const [result, setResult] = React.useState<ItemType[]>([]);
  useAsyncEffect(async () => {
    const list = await axios.get<ItemType[]>(
      "https://picsum.photos/v2/list?page=2&limit=50"
    );

    setResult(list.data);
  }, []);

  return (
    <div>
      {result.map(item => (
        <span key={item.id} style={{ display: "inline-block" }}>
          hi I'm {item.author}
        </span>
      ))}
    </div>
  );
};

storiesOf("Side effects/useAsyncEffect", module)
  .add("Docs", () => <ShowDocs md={require("../docs/useAsyncEffect.md")} />)
  .add("Demo", () => <Demo />);
