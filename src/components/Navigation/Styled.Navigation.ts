import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  min-height: 48px;
  border-bottom: 0.5px solid var(--text-secondary-color);

  @media (min-width: 775px) {
    display: grid;
    grid-template-columns: 15% 70% 15%;
  }
`;

export const StyledNav = styled.nav`
  display: none;

  @media (min-width: 775px) {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    gap: 32px;
  }
  @media (min-width: 1024px) {
    justify-content: center;
  }
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;

  img {
    margin-right: 16px;

    @media (min-width: 775px) {
      display: none;
    }
  }

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

export const StyledLangWrapper = styled.div`
  display: none;

  @media (min-width: 775px) {
    display: flex;
    gap: 16px;
    margin-right: 32px;
  }

  @media (min-width: 1024px) {
    margin-right: 0px;
  }
`;
