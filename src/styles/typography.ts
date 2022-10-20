import { createGlobalStyle } from "styled-components";
import convertToRem from "../utils/convertToRem";

const GlobalTypography = createGlobalStyle`
  .title1 {
    font-size: ${convertToRem(32)};
  }
  
  .title2 {
    font-size: ${convertToRem(28)};
  }

  .title3 {
    font-size: ${convertToRem(25)};
  }

  .title4 {
    font-size: ${convertToRem(16)};
  }

  .text-bold {
    font-weight: 700;
  }

  .text-thin {
    font-weight: 400;
  }

  .color-white {
    color: var(--white);
  }

  .color-black-1 {
    color: var(--black-1);
  }

  .color-black-2 {
    color: var(--black-2);
  }

  .text-center {
    text-align: center;
  }
`;

export default GlobalTypography;
