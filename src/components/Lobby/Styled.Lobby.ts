import styled from "styled-components";

export const StyledTable = styled.table`
  border: 1px solid var(--button-color);
  border-collapse: collapse;
  width: 90%;
  margin: 16px auto;
  font-size: small;

  thead > tr:first-child {
    &:hover {
      cursor: default;
      background-color: var(--main-bg-color);
    }
  }

  @media (min-width: 1024px) {
    width: 100%;
  }
`;

export const StyledTr = styled.tr`
  text-align: center;
  color: var(--text-secondary-color);

  &:hover {
    cursor: pointer;
    color: var(--text-color);
    background-color: var(--button-color);
  }
`;

export const StyledTh = styled.th`
  text-align: center;
  padding: 16px;
`;

export const StyledTd = styled.td`
  padding: 8px;
`;

export const StyledJoinTd = styled.td`
  padding: 16px;
  color: var(--text-color);
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: var(--button-color);
`;

export const StyledEmptyCell = styled(StyledJoinTd)`
  padding: 8px;
  background-color: var(--main-bg-color);
  cursor: default;
`;
