import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid blue;
`;

export const StyledNavSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: first baseline;
  background-color: #050505;
  min-height: 32px;
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
  gap: 16px;
  margin: 0 16px;
  border: 1px solid green;

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
