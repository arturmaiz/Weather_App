import styled from "styled-components";

export const ContainerStyle = styled.div`
  padding: 2em;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  max-width: 70%;
  border: 6px dashed #6c3e93;
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
