import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/globals";
import RootLayout from "@/templates/RootLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <GlobalStyles />
      <Component {...pageProps} />
    </RootLayout>
  );
}
