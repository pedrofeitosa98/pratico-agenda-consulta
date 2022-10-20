import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

export const Input = styled.input`
  font-size: ${convertToRem(25)};
  font-weight: 500;

  padding: ${convertToRem(12)};
  height: ${convertToRem(64)};
  width: 100%;

  color: var(--black-2);
  background-color: var(--white);
  border-radius: var(--smal-radius);
  border: 1px solid var(--gray-2);

  transition: var(--animate-time);

  ::placeholder {
    font-weight: 400;
    font-size: ${convertToRem(25)};

    color: var(--grey-2);

    transition: var(--animate-time);
  }

  :focus {
    border: 2px solid var(--black-2);
  }

  :hover::placeholder {
    color: var(--grey-3);
    padding-left: 6px;
  }

  :focus::placeholder {
    opacity: 0;
  }
`;
