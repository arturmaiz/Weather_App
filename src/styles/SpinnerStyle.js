import styled from "styled-components";

export const SpinnerStyle = styled.i`
  font-size: 3em;
  text-align: center;
  display: block;
  padding: 0.5em;
  color: #6c3e93;
  animation: spin 1s alternate infinite cubic-bezier(0.4, 0, 0.32, 1.01);

  @keyframes spin {
    0% {
      transform: rotate(0) scale(0.5);
    }
    100% {
      transform: rotate(360deg) scale(1.2);
    }
  }
`;
