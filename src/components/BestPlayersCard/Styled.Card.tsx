import styled from "styled-components";

export const StyledContainer = styled.div`
  min-width: 320px;
  min-height: 300px;
  background-color: var(--text-color);
  border-radius: 35px;

  span {
    font-size: 16px;
    font-weight: 600;
    color: var(--card-text-color);
  }

  ul {
    margin-top: 16px;
    text-align: center;

    > li:first-child {
      margin-left: 0;
    }

    li {
      display: inline-block;
      margin-left: 32px;
      font-size: 14px;
      color: var(--card-secondary-color);
    }
  }
`;
