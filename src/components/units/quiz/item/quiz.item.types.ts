import { Data } from "../detail/quiz.detail.types";
export type Questions = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};
export type QuizItemProps = {
  isRetrying: boolean;
  pause: () => void;
  seconds: number;
  minutes: number;
  hours: number;
  key: number;
  quiz: Questions;
  index: number;
  data?: Data | undefined;
  retryingData?: never[] | undefined;
};