import React from "react";
import Link from "next/link";
import Image from "next/image";
import BurgerMenu from "../../../public/navigation/burgerMenu.svg";

import {
  StyledContainer,
  StyledLogo,
  StyledLogoWrapper,
  StyledNav,
  StyledButtonsWrapper,
  StyledLangWrapper,
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
        <Link href="/contact">Contact</Link>
        <Link href="/report">Report</Link>
        <Link href="/learn">Learn</Link>
        <Link href="/community">Community</Link>
        <Link href="/">Home</Link>
      </StyledNav>

      <StyledButtonsWrapper>
        <Image src={BurgerMenu} alt="Burger Menu" width={32} height={32} />
        <StyledLangWrapper>
          <button>EN</button>
          <button>RO</button>
        </StyledLangWrapper>
      </StyledButtonsWrapper>
    </StyledContainer>
  );
}
