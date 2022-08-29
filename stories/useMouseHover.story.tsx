import { storiesOf } from "@storybook/react";
import * as React from "react";
import { useMouseHover } from "../src";
import ShowDocs from "./util/ShowDocs";

const Demo = () => {
  const [hoverd, hoverdController] = useMouseHover();

  return (
    <div {...hoverdController}>
      <span>{hoverd ? "hovering now!" : "mouse was leaved :("}</span>
    </div>
  );
};

storiesOf("Sensors/useMouseHover", module)
  .add("Docs", () => <ShowDocs md={require("../docs/useMouseHover.md")} />)
  .add("Demo", () => <Demo />);
