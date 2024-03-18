import React from "react";
import {
  StyledContainer,
  StyledBestPlayersContainer,
  StyleCircleDesign,
  StyledWhiteCircle,
  StyledPlayerDetails,
  StyledPlayerRecord,
} from "./Styled.Card";

export default function BestPlayersCard() {
  const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <StyledContainer>
      <StyleCircleDesign />
      <StyledWhiteCircle />

      <StyledBestPlayersContainer>
        <span>Best Players</span>
      </StyledBestPlayersContainer>

      <StyledPlayerDetails>
        {ranks.map((playerRank) => (
          <StyledPlayerRecord key={playerRank}>
            <span>{playerRank}</span>
            <span>Name</span>
            <span>Points</span>
            <span>Rewards</span>
          </StyledPlayerRecord>
        ))}
      </StyledPlayerDetails>
    </StyledContainer>
  );
}
