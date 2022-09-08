import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";
import QuizUI from "./quiz.detail.presenter";
import { getQuizByTheme } from "./quiz.detail.query";

export default function Quiz() {
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();
  const themeId = router.query.id;
  const onClickShowQuizItem = () => {
    setIsClicked(true);
  };
  const fallback = [];
  const { data = fallback } = useQuery(["QuizData"], () =>
    getQuizByTheme(themeId)
  );

  return (
    <QuizUI
      data={data}
      isClicked={isClicked}
      onClickShowQuizItem={onClickShowQuizItem}
    />
  );
}
