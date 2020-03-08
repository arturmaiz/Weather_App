import styled from "styled-components";

export const ToggleTemperatureStyle = styled.i`
  background-color: #6c3e93;
  color: #fff;
  padding: 0.3em;
  font-size: 1.4em;
  font-weight: bold;
  border: 2px solid #6c3e93;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    background-color: #fff;
    color: #6c3e93;
    font-weight: bold;
  }
  :before {
    margin-right: 5px;
  }
  :active {
    background-color: #6c3e93;
    color: #fff;
  }
  @media (max-width: 520px) {
    font-size: 1em;
  }
`;
