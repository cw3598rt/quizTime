import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  correctAnswersState,
  inCorrectAnswersState,
  indexCounterState,
  pickedAnswerState,
  reviewNoteState,
  timeRecordState,
} from "../../../../commons/store";
import QuizItemUI from "./quiz.item.presenter";
import { QuizItemProps } from "./quiz.item.types";

export default function QuizItem(props: QuizItemProps) {
  const [indexCounter, setIndexCounter] = useRecoilState(indexCounterState);
  const [pickedAnswer, setPickedAnswer] = useRecoilState(pickedAnswerState);
  const [, setTimeRecord] = useRecoilState(timeRecordState);

  const [correctAnswerCounter, setCorrectAnswerCounter] =
    useRecoilState(correctAnswersState);
  const [inCorrectAnswerCounter, setInCorrectAnswerCounter] = useRecoilState(
    inCorrectAnswersState
  );
  const [reviewNote, setReviewNote] = useRecoilState(reviewNoteState);
  const router = useRouter();
  const onClickMoveToNextQuestion = (Questions: string) => () => {
    if (pickedAnswer === props.quiz.correct_answer) {
      const correctAnswers = [...correctAnswerCounter];
      correctAnswers.push(pickedAnswer);
      setCorrectAnswerCounter(correctAnswers);
    } else {
      const reviewData = [...reviewNote, Questions];
      setReviewNote(reviewData);
      const inCorrectAnswers = [...inCorrectAnswerCounter];
      inCorrectAnswers.push(pickedAnswer);
      setInCorrectAnswerCounter(inCorrectAnswers);
    }

    setIndexCounter(indexCounter + 1);
    setPickedAnswer("");
    if (indexCounter === 9) {
      router.push("/quiz/result");
      props.pause();
      setTimeRecord({
        hours: String(props.hours),
        minutes: String(props.minutes),
        seconds: String(props.seconds),
      });
    }
  };
  useEffect(() => {
    if (!props.isRetrying) {
      sessionStorage.setItem("QuizData", JSON.stringify(props.data?.quizData));
    }
  }, []);

  return (
    <QuizItemUI
      retryingData={props.retryingData}
      isRetrying={props.isRetrying}
      onClickMoveToNextQuestion={onClickMoveToNextQuestion}
      indexCounter={indexCounter}
      quiz={props.quiz}
      index={props.index}
      Answers={props.data?.Answers}
    />
  );
}
