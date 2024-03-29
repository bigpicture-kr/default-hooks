import { storiesOf } from "@storybook/react";
import * as React from "react";
import { useCountDown } from "../src";
import ShowDocs from "./util/ShowDocs";

const Demo = () => {
  const [date, setDate] = React.useState("2022-08-31T23:59");

  const [time] = useCountDown(date);

  return (
    <div>
      <input value={date} onChange={e => setDate(e.target.value)} />
      <div> days : {time.days}</div>
      <div> hours : {time.hours}</div>
      <div> minutes : {time.minutes}</div>
      <div> seconds : {time.seconds}</div>
    </div>
  );
};

storiesOf("Utils/useCountDown", module)
  .add("Docs", () => <ShowDocs md={require("../docs/useCountDown.md")} />)
  .add("Demo", () => <Demo />);
