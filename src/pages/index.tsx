import { Lobby, BestPlayersCard } from "@/components";
import Deck from "@/entities/Deck";

export default function Home() {
  const deck = new Deck().newDeck();
  console.log(deck);

  return (
    <>
      <Lobby />
      <BestPlayersCard />
    </>
  );
}
