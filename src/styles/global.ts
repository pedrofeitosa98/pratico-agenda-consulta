import { createGlobalStyle } from "styled-components";
import convertToRem from "../utils/convertToRem";

const GlobalStyle = createGlobalStyle`
  :root{
    --page-color: #FFEEEE;
    --primary-color: #E93B3D;
    --white: #FFFFFF;
    --gray-1: #E0E0E0;
    --gray-2: #BFBFBF;
    --gray-3: #A4A4A4;
    --black-1: #1D1D1D;
    --black-2: #000000;
    --big-radius: 18px;
    --small-radius: 8px;
    --animate-time: 0.3s;
    --shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  * {
    margin: 0;
    padding: 0;
    
    box-sizing: border-box;

    outline: 0;
    border: 0;
  }

  html {
    height: 100%;
  }
  
  body {
    background-color: var(--page-color);
    color: var(--black-1);
    
    font-weight: 500;

    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
    
    overflow-x: hidden;
  }

  body, #root {
    position: relative;
  
    min-height: 100vh;
  }

  body, input, button, ::placeholder {
    font-family: 'Inter', sans-serif;
  }

  a {
    display: inline-block;
    background: none;
    
    border: 0;
    
    cursor: pointer;
    
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
  
  ul {
    padding: 0;
    text-align: left;
    
    list-style: none;
  }

  .full-container {
    width: 90%;
    height: 90%;
    
    max-width: 920px;
    
    margin: 0 auto;

    padding-left: 15px;
    padding-right: 15px;

    background-color: var(--white);
  }

  .right-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 50%;
    height: 100%;

    overflow-y: auto;

    padding: ${convertToRem(80)} ${convertToRem(56)};
  }
`;

export default GlobalStyle;
