import { Navigation, Footer } from "@/components";

export const metadata = {
  title: "Website",
  description: "A random Website for testing amazing stuff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
