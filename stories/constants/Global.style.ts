// global-style.ts
import { createGlobalStyle } from "styled-components";

// 외부에서 import 할거니까 모듈 내보내자~!
export const GlobalStyle = createGlobalStyle`

  /* 그밖에 글로벌 스타일 작성하기  */
  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  input {
    padding: 0;
    margin: 0;

    border: none;
  }
  
  input, textarea {
    outline: none;
    /* On iOS 5 and later */
    border-radius: 0;
  }

  textarea {
    resize: none;
  }

  button {
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    margin: 0; // ios default css
    border: none;
  }

  svg, image, video {
    vertical-align: top;
  }
`;
