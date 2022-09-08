import { route } from "next/dist/server/router";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import MainUI from "./main.presenter";
import { getThemes } from "./main.query";

export default function Main() {
  const { data } = useQuery(["Themes"], getThemes, {
    staleTime: 0,
    cacheTime: 300000,
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
  });
  const router = useRouter();
  const onClickMoveToQuizPage = (themeId) => () => {
    router.push(`/quiz/detail/${themeId}`);
  };
  return <MainUI data={data} onClickMoveToQuizPage={onClickMoveToQuizPage} />;
}
