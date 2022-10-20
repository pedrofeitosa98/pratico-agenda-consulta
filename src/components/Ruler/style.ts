import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

export const RulerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const Line = styled.hr`
  width: 100%;
  border-top: 1px solid var(--gray-1);
`;

export const Title = styled.p`
  margin: ${convertToRem(48)} ${convertToRem(8)};
`;
