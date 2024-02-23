import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { GlobalStyles } from "@/styles/globals";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
      <GlobalStyles />
      <Component {...pageProps} />
    )
}