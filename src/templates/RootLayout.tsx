import { Navigation, Footer } from "@/components";
import { StyledContainer } from "@/styles/globals";

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
    <StyledContainer>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </StyledContainer>
  );
}
