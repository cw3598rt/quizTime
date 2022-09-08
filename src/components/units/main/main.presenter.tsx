import * as S from "./main.styles";
import ThemeItem from "./themeItem.presenter";

export default function MainUI(props) {
  return (
    <S.Wrapper>
      <S.Title>Quiz Time</S.Title>
      <S.Divider></S.Divider>
      <S.SubTitle>Pick your Theme</S.SubTitle>
      <S.ThemeBox>
        {props.data?.map((theme) => (
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
