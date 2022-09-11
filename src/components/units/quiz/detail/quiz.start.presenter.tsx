import * as S from "./quiz.detail.styles";
import { QuizStartUIProps } from "./quiz.detail.types";

export default function QuizStartUI(props: QuizStartUIProps) {
  return (
    <S.Section>
      <S.QuizStart>Let&apos;s Begin</S.QuizStart>
      <S.QuizStartButton onClick={props.onClickShowQuizItem}>
        GO
      </S.QuizStartButton>
    </S.Section>
  );
}
