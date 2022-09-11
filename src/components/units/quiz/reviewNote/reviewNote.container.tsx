import { useRouter } from "next/router";
import ReviewNoteUI from "./reviewNote.presenter";
import { ReviewNoteProps } from "./reviewItem.types";
export default function ReviewNote(props: ReviewNoteProps) {
  const router = useRouter();
  const onClickMoveToReviewNote = () => {
    router.push("/quiz/reviewNote/detail");
  };
  return (
    <ReviewNoteUI
      isWriting={props.isWriting}
      onClickMoveToReviewNote={onClickMoveToReviewNote}
    />
  );
}
