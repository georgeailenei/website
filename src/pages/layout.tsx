import { Navigation, Footer } from "@/components";

export const metadata = {
  title: "codelines",
  description: "Working in progress",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
