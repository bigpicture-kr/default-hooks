import { storiesOf } from "@storybook/react";
import * as React from "react";
import { useInput } from "../src";
import ShowDocs from "./util/ShowDocs";
import Validator from "./util/Validator";

const Demo = () => {
  const LIMIT = 10;
  const name = useInput("initialName", [
    {
      validator: Validator.underLengthString(LIMIT),
      errorText: `type under ${LIMIT}`
    }
  ]);
  const { value, setValue, error } = name;
  return (
    <div>
      <div>
        <span>what's your name</span>
        <input {...value} />
      </div>

      <span>this is real state : {value.value}</span>

      <div>
        <button
          onClick={() => {
            setValue("");
          }}
        >
          click to clear
        </button>
      </div>

      <div>
        <span>this is error text: {error.error}</span>
      </div>
    </div>
  );
};

storiesOf("Sensors/useInput", module)
  .add("Docs", () => <ShowDocs md={require("../docs/useInput.md")} />)
  .add("Demo", () => <Demo />);
