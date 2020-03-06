import styled from "styled-components";

export const NavigationStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #6c3e93;
  height: 8vh;
  a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s ease-in-out;
    text-transform: capitalize;
    :hover {
      color: #333;
    }
    @media (max-width: 560px) {
      font-size: 0.8em;
    }
  }
  a:nth-child(1),
  a:nth-child(2) {
    margin-right: 15px;
    display: inline-block;
  }
  .fas {
    text-transform: uppercase;
    font-size: 1em;
    padding: 3px;
    @media (max-width: 560px) {
      font-size: 0.8em;
    }
  }
  @media (max-width: 560px) {
    width: 100%;
  }
`;
