import { storiesOf } from "@storybook/react";
import * as React from "react";
import { useListenKeyboard } from "../src";
import ShowDocs from "./util/ShowDocs";

const Demo = () => {
  const [clickCount, setClickCount] = React.useState<number>(0);

  useListenKeyboard({
    key: "b",
    handler: () => {
      setClickCount(clickCount + 1);
    }
  });

  return (
    <div>
      <h1>Feel free and click "b" key in your keyboard</h1>
      <h2>You clicked {clickCount} now!</h2>
    </div>
  );
};

storiesOf("Side effects/useListenKeyboard", module)
  .add("Docs", () => <ShowDocs md={require("../docs/useListenKeyboard.md")} />)
  .add("Demo", () => <Demo />);
