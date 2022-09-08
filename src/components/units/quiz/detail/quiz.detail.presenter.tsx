import * as S from "./quiz.detail.styles";
import QuitItem from "../item/quiz.item.container";
import QuizStartUI from "./quiz.start.presenter";
export default function QuizUI(props) {
  return (
    <S.Wrapper>
      {!props.isClicked && (
        <QuizStartUI onClickShowQuizItem={props.onClickShowQuizItem} />
      )}
      {props.isClicked && (
        <div>
          <QuitItem />
        </div>
      )}
    </S.Wrapper>
  );
}
