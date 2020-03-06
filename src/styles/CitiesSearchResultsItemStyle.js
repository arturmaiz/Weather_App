import styled from "styled-components";

export const CitiesSearchResultsItemStyle = styled.li`
  background: #fff;
  border: 1px dashed #6c3e93;
  padding: 0.2em 0.2em.2em 7px;
  color: #6c3e93;
  font-weight: bold;
  text-transform: capitalize;
  border-right: 2px solid #6c3e93;
  border-left: 2px solid #6c3e93;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.42, 0, 0, 1.78);
  :hover {
    background-color: #6c3e93;
    color: #fff;
  }
  :nth-child(1) {
    border-top: none;
  }
  :last-child {
    border-bottom: 2px solid #6c3e93;
  }
`;
