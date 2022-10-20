import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

const LeftSectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  min-width: 50%;
  min-height: 100%;

  border-radius: var(--left-radius);

  background-color: var(--primary-color);

  padding: ${convertToRem(56)} ${convertToRem(26)} 0;

  @media (max-width: 768px) {
    width: 100%;
    max-height: ${convertToRem(80)};
    justify-content: center;

    padding: ${convertToRem(36)};

    border-radius: 18px 18px 0 0;
  }

  .text-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${convertToRem(21)};

    margin-top: 10%;
  }

  @media (max-width: 768px) {
    .text-div,
    #cliente {
      display: none;
    }
  }

  #cliente {
    width: 80%;
    max-width: ${convertToRem(479)};
    max-height: ${convertToRem(521)};
  }
  @media (max-height: 800px) {
    #cliente {
      width: 60%;
    }
  }
`;

export default LeftSectionStyle;
