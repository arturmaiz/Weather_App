import styled from "styled-components";

export const SearchButtonStyle = styled.button`
  padding: 0.4em;
  cursor: pointer;
  outline: none;
  font-weight: bold;
  color: #fff;
  border: 2px solid #6c3e93;
  background-color: #6c3e93;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  height: 100%;
  border-left-color: transparent;
  :hover {
    background-color: #fff;
    color: #6c3e93;
  }
  :active {
    background-color: #6c3e93;
    color: #fff;
  }
  @media (max-width: 560px) {
    font-size: 1em;
  }
`;
