import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import styled from "styled-components";
import { useChangePage } from "../src";
import { FlexBox, FlexCenter, SizedBox } from "./constants/Common.style";
import { GlobalStyle } from "./constants/Global.style";
import ShowDocs from "./util/ShowDocs";

const Demo = () => {
  // get from your server
  const TOTAL_PAGE = 10;
  const [currentPage, setCurrentPage] = useState<number>(0);

  const { handler, disabled, title } = useChangePage(
    currentPage,
    setCurrentPage,
    TOTAL_PAGE
  );

  return (
    <FlexCenter direction="column">
      <span>currentPage is: {currentPage + 1}</span>
      <SizedBox height={10} />
      <FlexCenter>
        <PageButton
          onClick={() => {
            handler("prev");
          }}
          disabled={disabled.prev}
          title={title.prev}
        >
          {"<"}
        </PageButton>

        <FlexBox gap={10}>
          {[...Array(TOTAL_PAGE)].map((_, index) => (
            <Page
              key={index}
              selected={index === currentPage}
              onClick={() => [setCurrentPage(index)]}
            >
              {index + 1}
            </Page>
          ))}
        </FlexBox>
        <PageButton
          onClick={() => {
            handler("next");
          }}
          disabled={disabled.next}
          title={title.next}
        >
          {">"}
        </PageButton>
      </FlexCenter>
    </FlexCenter>
  );
};

storiesOf("Sensors/useChangePage", module)
  .add("Docs", () => <ShowDocs md={require("../docs/useChangePage.md")} />)
  .add("Demo", () => (
    <>
      <GlobalStyle />
      <Demo />
    </>
  ));

const PageButton = styled.button`
  padding: 6px;

  border: 1px solid;
  border-radius: 5px;
`;

const Page = styled.button<{ selected: boolean }>`
  color: ${({ selected }) => (selected ? "green" : "black")};
`;
