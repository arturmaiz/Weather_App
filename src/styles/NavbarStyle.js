import styled from "styled-components";

export const NavbarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #6c3e93; 
  height: 8vh;
  padding: 0em 1em;
  @media (max-width: 560px) {
    flex-direction: column;
    height: 16vh;
  }
`;
