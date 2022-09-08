import * as S from "./quiz.detail.styles";

export default function QuizStartUI(props) {
  return (
    <S.Section>
      <S.QuizStart>Let's Begin</S.QuizStart>
      <S.QuizStartButton onClick={props.onClickShowQuizItem}>
        GO
      </S.QuizStartButton>
    </S.Section>
  );
}
