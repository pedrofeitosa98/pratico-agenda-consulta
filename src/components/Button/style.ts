import styled, { css } from "styled-components";
import convertToRem from "../../utils/convertToRem";

interface IButtonProps {
  filled?: boolean;
}

export const Button = styled.button`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${convertToRem(24)} ${convertToRem(48)};
  height: ${convertToRem(64)};
  width: fit-content;

  border-radius: var(--small-radius);

  ${({ filled }: IButtonProps) =>
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
          border: 1px solid var(--gray-2);

          :hover {
            color: var(--white);
            background-color: var(--gray-3);
            border: 1px solid var(--gray-3);
          }
        `}

  transition: var(--animate-time);

  :hover {
    box-shadow: var(--shadow);
  }
`;
