import styled from "styled-components";

export const StyledButton = styled.button<{ $primary: boolean }>`
  background-color: ${(props) => (props.$primary ? "#BF4F74" : "white")};
`;
