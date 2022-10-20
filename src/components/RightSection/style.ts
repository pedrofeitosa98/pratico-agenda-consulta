import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  min-width: 50%;
  min-height: 100%;

  overflow-y: auto;

  padding: ${convertToRem(56)};

  form {
    display: flex;
    flex-direction: column;
    gap: ${convertToRem(36)};

    width: 100%;
  }

  .request-section-login {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }

  .request-section-register {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    width: 100%;
  }

  @media (max-width: 768px) {
    .request-section-login,
    .request-section-register {
      flex-direction: row;
    }
  }

  .bottom-section {
    display: flex;
    flex-direction: column;
    gap: ${convertToRem(26)};

    width: 100%;
  }
`;

export default RightContainer;
