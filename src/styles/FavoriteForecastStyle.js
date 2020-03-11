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
  box-shadow: 0 5px 13px 2px #333;
  transform: translateY(0);
  transition: all 0.2s ease;
  :active {
    background-color: #fff;
    border: 1px dashed #6c3e93;
    color: #6c3e93;
  }
  :hover {
    transform: translateY(-5%);
    box-shadow: 0 6px 17px 2px #333;
  }
  h3 {
    text-transform: capitalize;
  }
  p {
    font-size: 0.8em;
  }
`;
