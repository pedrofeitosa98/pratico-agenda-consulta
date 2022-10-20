import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

const LogoStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  max-width: ${convertToRem(274)};
  max-height: ${convertToRem(63.3)};

  @media (max-width: 768px) {
    img {
      max-height: ${convertToRem(30)};
    }
  }
`;

export default LogoStyle;
