import React from "react";
import {
  StyledTable,
  StyledTh,
  StyledTr,
  StyledTd,
  StyledJoinTd,
} from "./Styled.Lobby";

export default function Lobby() {
  return (
    <StyledTable>
      <thead>
        <StyledTr>
          <StyledTh>Players</StyledTh>
          <StyledTh>Mode</StyledTh>
          <StyledTh>Status</StyledTh>
        </StyledTr>
      </thead>
      <tbody>
        <StyledTr>
          <StyledTd>Maria_Anders</StyledTd>
          <StyledTd>6-Players</StyledTd>
          <StyledTd>Available</StyledTd>
        </StyledTr>
        <StyledTr>
          <StyledTd>Maria_Anders</StyledTd>
          <StyledTd>6-Players</StyledTd>
          <StyledTd>Available</StyledTd>
        </StyledTr>
        <StyledTr>
          <StyledTd>Maria_Anders</StyledTd>
          <StyledTd>6-Players</StyledTd>
          <StyledTd>Available</StyledTd>
        </StyledTr>
        <StyledTr>
          <StyledTd>Maria_Anders</StyledTd>
          <StyledTd>6-Players</StyledTd>
          <StyledTd>Available</StyledTd>
        </StyledTr>
      </tbody>
      <tfoot>
        <StyledTr>
          <StyledJoinTd colSpan={3}>Join</StyledJoinTd>
        </StyledTr>
      </tfoot>
    </StyledTable>
  );
}
