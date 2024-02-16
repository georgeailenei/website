import Head from "next/head";
import { Navigation } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Website</title>
      </Head>
      <main>
        <Navigation />
      </main>
    </>
  );
}
