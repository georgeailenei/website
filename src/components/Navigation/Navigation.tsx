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
              <Link href="/blog">Work</Link>
            </li>
            <li>
              <Link href="/contact">Get in touch</Link>
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
