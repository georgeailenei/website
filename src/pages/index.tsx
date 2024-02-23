import { Header } from "@/components";
import type { NextPageWithLayout } from "./_app";
import RootLayout from "./layout";

const Home: NextPageWithLayout = () => {
  return;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{children}</RootLayout>;
};

export default Home;
