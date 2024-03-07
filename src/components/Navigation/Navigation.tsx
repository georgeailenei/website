import React from "react";
import Link from "next/link";

import {
  StyledContainer,
  StyledLogo,
  StyledLogoWrapper,
  StyledNav,
  StyledButtonsWrapper,
} from "./Styled.Navigation";

export default function Navigation() {
  return (
    <StyledContainer>
      <StyledLogoWrapper>
        <StyledLogo>
          codelines <span>&reg;</span>
        </StyledLogo>
      </StyledLogoWrapper>

      <StyledNav>
        <Link href="/">Home</Link>
        <Link href="/community">Community</Link>
        <Link href="/learn">Learn</Link>
        <Link href="/report">Report</Link>
        <Link href="/contact">Contact</Link>
      </StyledNav>

      <StyledButtonsWrapper>
        <button>EN</button>
        <button>RO</button>
      </StyledButtonsWrapper>
    </StyledContainer>
  );
}
