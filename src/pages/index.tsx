import { Lobby, BestPlayersCard } from "@/components";
import { GetStaticProps } from "next";
import { JsonPlaceHolderData } from "../../types";

type PageProps = {
  data: JsonPlaceHolderData[];
};

export default function Home({ data }: PageProps) {
  return (
    <>
      <Lobby />
      <BestPlayersCard />
    </>
  );
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return { props: { data }, revalidate: 30 };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        data: [],
      },
    };
  }
};
