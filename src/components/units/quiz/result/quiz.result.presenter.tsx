import { useRecoilState } from "recoil";
import {
  correctAnswersState,
  inCorrectAnswersState,
  timeRecordState,
} from "../../../../commons/store";
import * as S from "./quiz.result.styles";
export default function QuizResultUI(props) {
  const [timeRecord] = useRecoilState(timeRecordState);
  const [correctAnswerCounter] = useRecoilState(correctAnswersState);
  const [inCorrectAnswerCounter] = useRecoilState(inCorrectAnswersState);
  return (
    <S.Section>
      <S.ResultTitle>result</S.ResultTitle>
      <S.ResultDataBox>
        <S.Graph
          type="circle"
          strokeColor={{
            "0%": "#108ee9",
            "100%": "#87d068",
          }}
          percent={((correctAnswerCounter.length - 1) / 10) * 100}
        />
        <S.TextDataBox>
          <S.TimePassedDataBox>
            <S.TimeTitle>소요된 시간</S.TimeTitle>
            <S.TimeRecord>{`${timeRecord.hours}시:${timeRecord.minutes}분:${timeRecord.seconds}초`}</S.TimeRecord>
          </S.TimePassedDataBox>
          <S.CorrectAnswerDataBox>
            <S.CorrectAnswerTitle>정답</S.CorrectAnswerTitle>
            <S.CorrectAnswerCounts>
              {correctAnswerCounter.length - 1}개
            </S.CorrectAnswerCounts>
          </S.CorrectAnswerDataBox>
          <S.WrongAnswerDataBox>
            <S.WrongAnswerTitle>오답</S.WrongAnswerTitle>
            <S.WrongAnswerCounts>
              {inCorrectAnswerCounter.length - 1}개
            </S.WrongAnswerCounts>
          </S.WrongAnswerDataBox>
        </S.TextDataBox>
      </S.ResultDataBox>
      <S.ButtonBox>
        <S.Buttons onClick={props.onClickMoveToRetryPage}>다시 풀기</S.Buttons>
        <S.Buttons onClick={props.onClickMoveToreviewNotePage}>
          오답 노트 작성
        </S.Buttons>
      </S.ButtonBox>
    </S.Section>
  );
}
