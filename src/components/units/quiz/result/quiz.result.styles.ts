import styled from "@emotion/styled";
import { Progress } from "antd";

export const Graph = styled(Progress)``;
export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
`;
export const ResultTitle = styled.h1`
  font-size: 4em;
  color: forestgreen;
`;
export const ResultDataBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const TextDataBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TimePassedDataBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
`;
export const TimeTitle = styled.span`
  font-size: 2em;
  color: forestgreen;
`;
export const TimeRecord = styled.span`
  font-size: 2em;
  color: forestgreen;
`;
export const CorrectAnswerDataBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
`;
export const CorrectAnswerTitle = styled.span`
  font-size: 2em;
  color: forestgreen;
`;
export const CorrectAnswerCounts = styled.span`
  font-size: 2em;
  color: forestgreen;
`;
export const WrongAnswerDataBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
`;
export const WrongAnswerTitle = styled.span`
  font-size: 2em;
  color: forestgreen;
`;
export const WrongAnswerCounts = styled.span`
  font-size: 2em;
  color: forestgreen;
`;
export const ButtonBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-top: 3em;
  gap: 3em;
`;
export const Buttons = styled.button`
  cursor: pointer;
  width: 100%;
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
