import styled from "styled-components";

export const ConsoleWrapperStyle = styled.div`
  margin-top: 16px;
  margin-left: 16px;

  form {
    display: inline-block;

    input[type="text"] {
      background-color: #f1f1f1;
      border: none;
      margin-left: 8px;
    }

    input[type="text"]:focus {
      border: none;
      outline: none;
    }
  }
`;

export const StyledConsoleButton = styled.button`
  all: unset;
  cursor: pointer;
`;
