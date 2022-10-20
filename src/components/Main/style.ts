import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

const MainContainer = styled.main`
  display: flex;

  width: 90%;
  max-width: ${convertToRem(1320)};
  min-height: 90%;
  max-height: ${convertToRem(904)};

  margin: 0 auto;

  overflow-y: auto;

  background-color: var(--white);

  border-radius: var(--big-radius);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default MainContainer;
