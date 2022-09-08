import { useQuery } from "react-query";
import MainUI from "./main.presenter";
import { getThemes } from "./main.query";

export default function Main() {
  const { data } = useQuery(["Themes"], getThemes);

  return <MainUI data={data} />;
}
