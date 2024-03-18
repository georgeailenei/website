import styled from "styled-components";

export const StyledContainer = styled.div`
  border-top: 0.5px solid var(--text-secondary-color);

  min-height: 48px;
  width: 100%;
  bottom: 0;
`;

export const StyledLogoWrapper = styled.div`
  margin-top: 16px;

  p {
    font-size: small;
    margin-left: 16px;
    margin-top: 8px;

    @media (min-width: 1024px) {
      margin-left: 0;
    }
  }
`;

export const StyledCopyrights = styled.p`
  font-size: smaller;
  margin: 16px 0px 16px 16px;
  color: var(--text-secondary-color);

  @media (min-width: 1024px) {
    margin-left: 0;
  }
`;
