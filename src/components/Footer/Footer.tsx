import React from "react";
import {
  StyledCopyrights,
  StyledContainer,
  StyledLogoWrapper,
} from "./Styled.Footer";
import Logo from "../Navigation/Logo/Logo";

export default function Footer() {
  return (
    <StyledContainer>
      <StyledLogoWrapper>
        <Logo />
        <p>
          Quality as priority. Efficiency as an advantage. <br /> Project
          success as the main goal.
        </p>
      </StyledLogoWrapper>
      <StyledCopyrights>
        codelines <span>&reg;</span> 2024. All rights reserved.
      </StyledCopyrights>
    </StyledContainer>
  );
}
