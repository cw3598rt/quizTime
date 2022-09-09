import { useRecoilState } from "recoil";
import { pickedAnswerState } from "../../../../commons/store";
import QuizButtonUI from "./quiz.button.presenter";
import * as S from "./quiz.item.styles";

export default function QuizItemUI(props) {
  const [pickedAnswer] = useRecoilState(pickedAnswerState);

  const retryingAnswers = props.retryingData?.map(
    (Answers) => Answers.incorrect_answers
  );

  return (
    <>
      {props.index === props.indexCounter && (
        <S.Section>
          <S.Wrapper>
            <S.QuestionTitle>Question {props.index + 1}</S.QuestionTitle>
            <S.Question>{props.quiz.question}</S.Question>
            <S.ButtonBox>
              {props.isRetrying
                ? retryingAnswers[props.indexCounter].map((answer, index) => (
                    <QuizButtonUI key={index} answer={answer} index={index} />
                  ))
                : props.Answers[props.indexCounter].map((answer, index) => (
                    <QuizButtonUI key={index} answer={answer} index={index} />
                  ))}
            </S.ButtonBox>
            {(pickedAnswer === props.quiz.correct_answer && (
              <S.CongratsBox>
                <S.CongratsLights></S.CongratsLights>
                <S.CongratsLights></S.CongratsLights>
                <S.CongratsLights></S.CongratsLights>
                <S.CongratsLights></S.CongratsLights>
                <S.CongratsLights></S.CongratsLights>
                <S.CongratsLights></S.CongratsLights>
                <S.CongratsLights></S.CongratsLights>
                <S.CongratsLights></S.CongratsLights>

                <S.CongratsComment>정답입니다</S.CongratsComment>

                <S.CongratsLights></S.CongratsLights>
                <S.CongratsLights></S.CongratsLights>
                <S.CongratsLights></S.CongratsLights>
                <S.CongratsLights></S.CongratsLights>
                <S.CongratsLights></S.CongratsLights>
                <S.CongratsLights></S.CongratsLights>
                <S.CongratsLights></S.CongratsLights>
                <S.CongratsLights></S.CongratsLights>
              </S.CongratsBox>
            )) ||
              (props.quiz.incorrect_answers.includes(pickedAnswer) && (
                <S.WrongBox>
                  <S.WrongGraphicBox>
                    <S.Face></S.Face>
                    <S.Hair></S.Hair>
                    <S.SideBurns></S.SideBurns>
                    <S.EyeBrowLeft></S.EyeBrowLeft>
                    <S.EyeBrowRight></S.EyeBrowRight>
                    <S.Nose></S.Nose>
                    <S.Mouth></S.Mouth>
                    <S.Bubble>오답입니다</S.Bubble>
                  </S.WrongGraphicBox>
                </S.WrongBox>
              ))}

            <S.NextButton
              isFinished={pickedAnswer}
              onClick={props.onClickMoveToNextQuestion}
            >
              Next
            </S.NextButton>
          </S.Wrapper>
        </S.Section>
      )}
    </>
  );
}
