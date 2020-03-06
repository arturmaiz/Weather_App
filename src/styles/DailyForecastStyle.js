import styled from "styled-components";

export const DailyForecastStyle = styled.div`
  background-color: #6c3e93;
  margin: 0.5em;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  h3 {
    text-transform: capitalize;
  }
  p {
    font-size: 0.8em;
  }
  @media (max-width: 520px) {
    margin: 0.3em;
    padding: 0.5em;
    :last-child {
      flex-grow: 1;
    }
    h3 {
      font-size: 1em;
    }
  }
`;
