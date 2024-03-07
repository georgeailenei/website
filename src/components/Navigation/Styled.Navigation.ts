import styled from "styled-components";

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 15% 70% 15%;
  min-height: 48px;
  border-bottom: 0.5px solid var(--text-secondary-color);
`;

export const StyledLogo = styled.h1`
  display: flex;
  justify-content: first baseline;
  font-size: 24px;
`;

export const StyledLogoWrapper = styled.div`
  margin: auto auto;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 16px;

  button {
    all: unset;
    cursor: pointer;
    font-size: 12px;
    color: var(--button-color);
  }

  button:hover {
    color: var(--text-color);
  }
`;
