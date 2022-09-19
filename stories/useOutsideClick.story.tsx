import { storiesOf } from "@storybook/react";
import * as React from "react";
import styled from "styled-components";
import { useOutsideClick } from "../src";
import { FlexCenter } from "./constants/Common.style";
import ShowDocs from "./util/ShowDocs";

const Demo = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const containerRef: React.RefObject<HTMLButtonElement> = React.useRef(null);
  useOutsideClick(containerRef, setIsOpen);

  return (
    <>
      <Container
        ref={containerRef}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <span>{isOpen ? "click out to close" : "open"}</span>
      </Container>
      {isOpen && (
        <OptionsWrapper direction="column">
          {["option1", "option2", "option3"].map(option => (
            <span>{option}</span>
          ))}
        </OptionsWrapper>
      )}
    </>
  );
};

storiesOf("Sensors/useOutsideClick", module)
  .add("Docs", () => <ShowDocs md={require("../docs/useOutsideClick.md")} />)
  .add("Demo", () => <Demo />);

const Container = styled.button`
  width: 200px;

  padding: 8px;

  border: 1px solid blue;

  cursor: pointer;
`;

const OptionsWrapper = styled(FlexCenter)`
  border: 1px solid skyblue;
  width: 200px;
`;
