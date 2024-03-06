import React from "react";
import { ConsoleWrapperStyle, StyledConsoleButton } from "./Styled.Console";

export default function Console() {
  function onSubmit() {
    console.log("Something - Something");
  }

  return (
    <ConsoleWrapperStyle>
      <form onSubmit={onSubmit}>
        <StyledConsoleButton type="submit">&gt;&gt;</StyledConsoleButton>
        <input type="text" placeholder="Type help"></input>
      </form>
    </ConsoleWrapperStyle>
  );
}
