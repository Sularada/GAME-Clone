import GamesTemplate from "@/stories/components/templates/GamesTemplate/GamesTemplate";
import { getGames } from "../../../firebase/dbController";

export default async function Home() {
  getGames();
  return <GamesTemplate />;
}
