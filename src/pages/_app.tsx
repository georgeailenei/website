import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/globals";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/api/main";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}
