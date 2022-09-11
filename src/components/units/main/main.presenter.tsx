import * as S from "./main.styles";
import { MainUIProps } from "./main.types";
import ThemeItem from "./themeItem.presenter";

export default function MainUI(props: MainUIProps) {
  return (
    <S.Wrapper>
      <S.Title>Quiz Time</S.Title>
      <S.Divider></S.Divider>
      <S.SubTitle>Pick your Theme</S.SubTitle>
      <S.ThemeBox>
        {props.data?.map((theme: any) => (
          <ThemeItem
            key={theme.id}
            theme={theme}
            onClickMoveToQuizPage={props.onClickMoveToQuizPage}
          />
        ))}
      </S.ThemeBox>
    </S.Wrapper>
  );
}
