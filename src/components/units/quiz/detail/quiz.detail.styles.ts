import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${breakPoints.mobile} {
    margin-top: 2em;
    width: 100%;
    font-size: 0.8em;
  }
  @media ${breakPoints.tablet} {
    margin-top: 0em;
    width: 100%;
    font-size: 1.3em;
  }
`;
export const QuizItemBox = styled.div`
  width: 100%;
  height: 30em;
`;
export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
  @media ${breakPoints.mobile} {
    margin-top: 0em;
    width: 100%;
    font-size: 1em;
  }
  @media ${breakPoints.tablet} {
    margin-top: 0em;
    padding: 3em;
    width: 100%;
    font-size: 1.5em;
  }
`;

export const QuizStart = styled.h3`
  font-size: 4em;
  color: forestgreen;
  text-align: center;
`;

export const QuizStartButton = styled.button`
  cursor: pointer;
  width: 10em;
  height: 3em;
  font-size: 1.4em;
  margin: auto;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: darkgray;
  color: black;
  :hover {
    background-color: forestgreen;
    color: whitesmoke;
  }
  transition: all 250ms;
`;
