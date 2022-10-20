import styled, { css } from "styled-components";
import convertToRem from "../../utils/convertToRem";

export const Button = styled.button`
  padding: ${convertToRem(24)} ${convertToRem(48)};
  height: ${convertToRem(64)};
  width: fit-content;

  ${(filled: Boolean) =>
    filled
      ? css`
          color: var(--white);
          background-color: var(--primary-color);

          :hover {
            filter: brightness(110%);
          }
        `
      : css`
          color: var(--black-1);
          background-color: var(--white);
          border-radius: var(--smal-radius);
          border: 1px solid var(--gray-2);

          :hover {
            color: var(--white);
            background-color: var(--gray-2);
          }
        `}

  transition: var(--animate-time);

  :hover {
    box-shadow: var(--shadow);
  }
`;
