import { storiesOf } from "@storybook/react";
import * as React from "react";
import { useCheckBrowser } from "../src";
import ShowDocs from "./util/ShowDocs";

const Demo = () => {
  const browser = useCheckBrowser();

  return (
    <div>
      <div>your browser is {browser}</div>
    </div>
  );
};

storiesOf("Sensors/useCheckBrowser", module)
  .add("Docs", () => <ShowDocs md={require("../docs/useCheckBrowser.md")} />)
  .add("Demo", () => <Demo />);
