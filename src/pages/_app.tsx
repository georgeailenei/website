import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/globals";
import RootLayout from "@/templates/RootLayout";
import { io, Socket } from "socket.io-client";

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io().connect(
  "http://localhost:3002"
);
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <GlobalStyles />
      <Component {...pageProps} />
    </RootLayout>
  );
}
