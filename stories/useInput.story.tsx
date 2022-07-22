import { storiesOf } from "@storybook/react";
import * as React from "react";
import { useInput } from "../src";
import ShowDocs from "./util/ShowDocs";

const Demo = () => {
  const [name, setName] = useInput("initialName");
  return (
    <div>
      <div>
        <span>what's your name</span>
        <input {...name} />
      </div>

      <span>this is real state : {name.value}</span>

      <div>
        <button
          onClick={() => {
            setName("");
          }}
        >
          click to clear
        </button>
      </div>
    </div>
  );
};

storiesOf("Sensors/useInput", module)
  .add("Docs", () => <ShowDocs md={require("../docs/useInput.md")} />)
  .add("Demo", () => <Demo />);
