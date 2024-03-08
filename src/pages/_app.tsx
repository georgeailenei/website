import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/globals";
import RootLayout from "@/templates/RootLayout";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <RootLayout>
      <NextUIProvider navigate={router.push}>
        <GlobalStyles />
        <Component {...pageProps} />
      </NextUIProvider>
    </RootLayout>
  );
}
