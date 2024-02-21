import Head from "next/head";
import { Navigation, Header, Footer } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Website</title>
      </Head>
      <main>
        <Navigation />
        <Header />
        <Footer />
      </main>
    </>
  );
}
