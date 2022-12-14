import { useState } from "react";
import { useRecoilState } from "recoil";
import Swal from "sweetalert2";
import { pickedAnswerState } from "../../../../commons/store";
import * as S from "./quiz.item.styles";
import { QuizButtonUIProps } from "./quiz.item.types";
export default function QuizButtonUI(props: QuizButtonUIProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [pickedAnswer, setPickedAnswer] = useRecoilState(pickedAnswerState);
  const onClickAnswer = (event: any) => {
    setIsClicked(true);
    setPickedAnswer(event.target.innerText);
  };
  const onClickAlert = () => {
    Swal.fire({
      title: "답은 한개만 고를수 있습니다.",
      icon: "warning",
      showConfirmButton: false,
      timer: 1000,
      backdrop: false,
    });
  };
  return (
    <>
      <S.Buttons
        isClicked={isClicked}
        onClick={pickedAnswer ? onClickAlert : onClickAnswer}
      >
        {props.answer
          .replace(/&quot;/g, '"')
          .replace(/&#039;/g, "'")
          .replace(/&rsquo;/g, "'")}
      </S.Buttons>
    </>
  );
}
