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
  quiz: any;
  index: number;
  data?: Data | undefined;
  retryingData?: string[] | undefined;
};
export type QuizItemUIProps = {
  retryingData: any;
  isRetrying: boolean;
  onClickMoveToNextQuestion: (Questions: string) => () => void;
  indexCounter: number;
  quiz: any;
  index: number;
  Answers: any;
};

export type QuizButtonUIProps = {
  key: number;
  answer: string;
  index: number;
};
export type ItemEmotionProps = {
  isClicked: boolean;
};
export type NextButtonEmotionProps = {
  isFinished: string;
};
