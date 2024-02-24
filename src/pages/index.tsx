import { Header, Navigation, Footer } from "@/components";
import { GetStaticProps } from "next";
import { JsonPlaceHolderData } from "../../types";

type PageProps = {
  data: JsonPlaceHolderData[];
};

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: JsonPlaceHolderData[] = await response.json();

    return { props: { data }, revalidate: 30 }; // revalidate: check if there is new data there; you can revalidate even in days.
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: [],
      },
    };
  }
};

export default function Home({ data }: PageProps) {
  return (
    <>
      <Navigation />
      <Header />
      <Footer />
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}
