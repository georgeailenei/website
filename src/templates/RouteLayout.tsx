import { Navigation, Footer } from "@/components";
import { StyledMainContainer } from "@/styles/globals";

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
    <StyledMainContainer>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </StyledMainContainer>
  );
}
