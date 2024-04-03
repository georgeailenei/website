import { Lobby, BestPlayersCard } from "@/components";
import Deck from "@/entities/Deck";

export default function Home() {
  const nrPlayers = 4;
  const deck = new Deck().newDeck(nrPlayers);
  console.log(deck);

  return (
    <>
      <Lobby />
      <BestPlayersCard />
    </>
  );
}
