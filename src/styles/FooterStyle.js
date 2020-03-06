import styled from "styled-components";

export const FooterStyle = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background: #6c3e93;
  text-align: center;
  padding: 0.5em;
  h3 {
    color: #fff;
    text-transform: capitalize;
    i {
      transition: scale 0.2s ease-in-out;
      cursor: pointer;
      :hover {
        transform: scale(1.2);
        color: red;
      }
    }
  }
`;
