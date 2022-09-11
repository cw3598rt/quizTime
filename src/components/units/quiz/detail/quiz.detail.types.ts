export type QuizProps = {
  isRetrying: boolean;
  retryingData?: string[] | undefined;
};
export type Data = {
  quizData: any;
  Answers: any[];
};
export type QuizUIProps = {
  retryingData: string[] | undefined;
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
