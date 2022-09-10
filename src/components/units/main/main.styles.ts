import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3em;
  gap: 1em;
  @media ${breakPoints.mobile} {
    margin-top: 8em;
    width: 100%;
    font-size: 0.8em;
  }
  @media ${breakPoints.tablet} {
    margin-top: 8em;
    padding: 3em;
    width: 100%;
    font-size: 1em;
  }
`;

export const Title = styled.h1`
  font-size: 4em;
  color: forestgreen;
`;

export const Divider = styled.div`
  width: 50%;
  height: 2px;
  margin: auto;
  background-color: forestgreen;
`;
export const SubTitle = styled.h2`
  font-size: 2em;
  color: forestgreen;
`;
export const ThemeBox = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2em;
  @media ${breakPoints.mobile} {
    width: 100%;
    margin-bottom: 5em;
  }
  @media ${breakPoints.tablet} {
    width: 100%;
    font-size: 1.5em;
    margin-bottom: 5em;
  }
`;
export const Themes = styled.div`
  width: 20%;
  height: 14em;
  padding: 1em;
  background-color: blanchedalmond;
  border-radius: 10px;
  cursor: pointer;
  color: forestgreen;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1em;
  :hover {
    transform: translateY(-16px);
  }
  transition: all 250ms ease-in;
  @media ${breakPoints.mobile} {
    width: 80%;
    margin: auto;
  }
  @media ${breakPoints.tablet} {
    width: 40%;
    font-size: 1.5em;
  }
`;
