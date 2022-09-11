export type QuizProps = {
  isRetrying: boolean;
  retryingData?: never[];
};
export type Data = {
  quizData: any;
  Answers: any[];
};
export type QuizUIProps = {
  retryingData: never[] | undefined;
  isRetrying: boolean;
  data: Data | undefined;
  isClicked: boolean;
  onClickShowQuizItem: () => void;
  pause: () => void;
  seconds: number;
  minutes: number;
  hours: number;
};
export type QuizStartUIProps = {
  onClickShowQuizItem: () => void;
};
