import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    overflow-x: hidden ;
  }

  body {
    height: 100vh;
    width: 100vw;

    background-color: #222831;
  }
`;
