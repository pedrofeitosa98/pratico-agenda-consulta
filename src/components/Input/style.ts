import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

export const Input = styled.input`
  font-size: ${convertToRem(18)};
  font-weight: 500;

  padding: ${convertToRem(12)};
  height: ${convertToRem(64)};
  width: 100%;

  margin-top: ${convertToRem(16)};

  color: var(--black-2);
  background-color: var(--white);
  border-radius: var(--small-radius);
  border: 1px solid var(--gray-2);

  transition: var(--animate-time);

  ::placeholder {
    font-weight: 400;
    font-size: ${convertToRem(18)};

    color: var(--gray-2);

    transition: var(--animate-time);
  }

  :focus {
    border: 1px solid var(--black-2);
  }

  :hover::placeholder {
    color: var(--gray-3);
    padding-left: 6px;
  }

  :focus::placeholder {
    opacity: 0;
  }
`;
