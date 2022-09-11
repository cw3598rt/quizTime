import { axiosInstance } from "../../../../commons/axiosInstance";
import { Questions } from "../item/quiz.item.types";

export async function getQuizByTheme(themeId: string | string[] | undefined) {
  const result = await axiosInstance.get(
    `/api.php?amount=10&category=${themeId}&type=multiple`
  );
  const quizData = result.data.results;
  const wrongAnswers = quizData.map(
    (quiz: Questions) => quiz.incorrect_answers
  );
  const correctAnswer = quizData.map((quiz: Questions) => quiz.correct_answer);
  wrongAnswers.map((answers: string[], index: number) =>
    answers.push(correctAnswer[index])
  );
  const Answers = [...wrongAnswers];
  Answers.map((answer) => answer.sort(() => 0.5 - Math.random()));

  return { quizData, Answers };
}
