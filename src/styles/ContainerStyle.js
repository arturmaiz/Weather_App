import styled from "styled-components";

export const ContainerStyle = styled.div`
  padding: 2em;
  box-shadow: 0px 0px 5px 1px #00000045;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  max-width: 70%;
  @media (max-width: 780px) {
    max-width: 90%;
    margin-top: 30px;
    padding: 1em;
  }
  @media (max-width: 520px) {
    margin-top: 20px;
    padding: 1em;
  }
`;
