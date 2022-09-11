import * as S from "./main.styles";
import { ThemeItemProps } from "./main.types";
export default function ThemeItem(props: ThemeItemProps) {
  return (
    <S.Themes onClick={props.onClickMoveToQuizPage(props.theme.id)}>
      {props.theme.name}
    </S.Themes>
  );
}
