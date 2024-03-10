import React from "react";
import {
  StyledTaglineContainer,
  StyledTaglineText,
  StyledSpanWrapper,
} from "./Styled.Text";

export default function TopInformation() {
  return (
    <StyledTaglineContainer>
      <StyledTaglineText>Work.</StyledTaglineText>
      <StyledSpanWrapper>
        <span>Where Innovation Unfolds</span>
        <br />
        <span>Crafting Digital Wonders Since 2024</span>
      </StyledSpanWrapper>
    </StyledTaglineContainer>
  );
}
