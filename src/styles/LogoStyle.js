import styled from "styled-components";

export const LogoStyle = styled.div`
  background-image: url("/Logo.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 150px;
  height: 8vh;
  @media (max-width: 560px) {
    height: 16vh;
  }
`;
