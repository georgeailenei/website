import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
`;

export const StyledNavSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: first baseline;
  background-color: #050505;
  min-height: 32px;
  width: 100%;
`;

export const StyledLogo = styled.h1`
  display: flex;
  justify-content: first baseline;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  margin-left: 16px;
  margin-right: 16px;

  span {
    font-size: 8px;
    top: 0;
  }
`;

export const StyledNav = styled.nav`
  height: fit-content;
  margin-right: 16px;

  a {
    font-size: 12px;
    text-decoration: none;
    margin-left: 8px;

    @media (min-width: 768px) {
      font-size: 14px;
      margin-left: 32px;
    }
  }

  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: 32px;
  }
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 16px;
  margin-right: 24px;
  max-width: 38px;

  button {
    all: unset;
    cursor: pointer;
    font-size: 12px;
    color: #989898;
  }

  button:hover {
    color: #050505;
  }
`;
