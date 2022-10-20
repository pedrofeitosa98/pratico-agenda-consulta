import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

export const Line = styled.hr`
  border: 1px solid var(--gray-1);
`;

export const Title = styled.p`
  margin: 0 ${convertToRem(8)};
`;
