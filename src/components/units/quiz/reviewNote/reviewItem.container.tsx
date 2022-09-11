import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReviewItemUI from "./reviewItem.presenter";
import { ReviewItemProps } from "./reviewItem.types";

export default function ReviewItem(props: ReviewItemProps) {
  const [value, setValue] = useState("");
  const router = useRouter();
  const onClickSubmitmyNote = (id: number) => () => {
    const data = { [id]: value };
    const originsessionData = JSON.parse(
      sessionStorage.getItem("myNote") || "[]"
    );

    originsessionData.unshift(data);

    sessionStorage.setItem("myNote", JSON.stringify(originsessionData));
  };
  useEffect(() => {
    router.asPath === "/quiz/reviewNote" && sessionStorage.removeItem("myNote");
  }, []);
  return (
    <ReviewItemUI
      index={props.index}
      isWriting={props.isWriting}
      onClickSubmitmyNote={onClickSubmitmyNote}
      setValue={setValue}
      key={props.index}
      review={props.review}
    />
  );
}
