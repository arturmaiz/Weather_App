import styled from "styled-components";

export const DailyForecastStyle = styled.div`
  background-color: #6c3e93;
  margin: 0.5em;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  box-shadow: 0 5px 13px 2px #333;
  transition: all 0.2s ease;
  transform: translateY(0);
  cursor: pointer;
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
