import styled from "styled-components";

export const FavoriteForecastStyle = styled.div`
  background-color: #6c3e93;
  margin: 0.5em;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  cursor: pointer;
  :active {
    background-color: #fff;
    border: 1px dashed #6c3e93;
    color: #6c3e93;
  }
  h3 {
    text-transform: capitalize;
  }
  p {
    font-size: 0.8em;
  }
`;
