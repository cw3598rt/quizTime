import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";

import QuizUI from "./quiz.detail.presenter";
import { getQuizByTheme } from "./quiz.detail.query";
import { useStopwatch } from "react-timer-hook";
import { QuizProps } from "./quiz.detail.types";
export default function Quiz(props: QuizProps) {
  const [isClicked, setIsClicked] = useState(false);
  const { seconds, minutes, hours, pause } = useStopwatch({ autoStart: true });
  const router = useRouter();
  const themeId = router.query.id;
  const onClickShowQuizItem = () => {
    setIsClicked(true);
  };

  const { data } = useQuery(["QuizData"], () => getQuizByTheme(themeId));

  return (
    <QuizUI
      retryingData={props.retryingData}
      isRetrying={props.isRetrying}
      data={data}
      isClicked={isClicked}
      onClickShowQuizItem={onClickShowQuizItem}
      pause={pause}
      seconds={seconds}
      minutes={minutes}
      hours={hours}
    />
  );
}
