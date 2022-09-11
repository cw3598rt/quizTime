export type MainUIProps = {
  data: any;
  onClickMoveToQuizPage: (themeId: string) => () => void;
};
export type ThemeItemProps = {
  key: any;
  theme: any;
  onClickMoveToQuizPage: (themeId: string) => () => void;
};
