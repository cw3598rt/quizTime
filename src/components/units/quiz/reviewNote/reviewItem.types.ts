import { Dispatch, SetStateAction } from "react";

export type ReviewItemProps = {
  key: number;
  review: any;
  isWriting: boolean;
  index: number;
};

export type ReviewItemUIProps = {
  index: number;
  isWriting: boolean;
  onClickSubmitmyNote: (id: any) => () => void;
  setValue: Dispatch<SetStateAction<string>>;
  key: number;
  review: any;
};

export type ReviewNoteProps = {
  isWriting: boolean;
};
export type ReviewNoteUIProps = {
  isWriting: boolean;
  onClickMoveToReviewNote: () => void;
};
export type EmotionProps = {
  isCorrect: boolean;
};
