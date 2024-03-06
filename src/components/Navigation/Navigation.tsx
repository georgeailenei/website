import React from "react";
import Link from "next/link";

import {
  StyledContainer,
  StyledLogo,
  StyledLogoSide,
  StyledNav,
  StyledButtonsWrapper,
} from "./Styled.Navigation";

export default function Navigation() {
  return (
    <StyledContainer>
      <StyledLogoSide>
        <StyledLogo>
          codelines. <span>&reg;</span>
        </StyledLogo>

        <StyledNav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/community">Community</Link>
            </li>
            <li>
              <Link href="/learn">Learn</Link>
            </li>
            <li>
              <Link href="/report">Report</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </StyledNav>
      </StyledLogoSide>

      <StyledButtonsWrapper>
        <button>EN</button>
        <button>RO</button>
      </StyledButtonsWrapper>
    </StyledContainer>
  );
}
