import styled from "styled-components";

export const StyledLogo = styled.h1`
  display: flex;
  justify-content: first baseline;
  font-size: 24px;
`;

export const StyledLogoWrapper = styled.div`
  margin: auto auto;
  margin-left: 16px;

  @media (min-width: 1024px) {
    margin-left: 0;
  }
`;
