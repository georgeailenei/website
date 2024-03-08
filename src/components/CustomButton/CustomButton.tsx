import React, { useState } from "react";
import { StyledButton } from "./Styled.CustomButton";

export default function CustomButton() {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };
  return (
    <StyledButton onClick={handleClick} $primary={display}>
      Button
    </StyledButton>
  );
}
