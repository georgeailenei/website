import React from "react";
import Link from "next/link";
import { StyledContainer, StyledCopyrightWrapper } from "./Styled.Footer";

export default function Footer() {
  return (
    <StyledContainer>
      <ul>
        <li>
          <Link href="#">Work</Link>
        </li>
        <li>
          <Link href="#">LinkedIn</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul>

      <StyledCopyrightWrapper>
        <p>codelines &copy; 2024</p>
      </StyledCopyrightWrapper>
    </StyledContainer>
  );
}
