import { Dispatch, SetStateAction } from "react";
import { Questions } from "../item/quiz.item.types";

export type ReviewItemProps = {
  key: number;
  review: Questions;
  isWriting: boolean;
  index: number;
};

export type ReviewItemUIProps = {
  index: number;
  isWriting: boolean;
  onClickSubmitmyNote: (id: any) => () => void;
  setValue: Dispatch<SetStateAction<string>>;
  key: number;
  review: Questions;
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
