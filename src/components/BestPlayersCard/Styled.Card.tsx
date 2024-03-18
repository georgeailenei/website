import styled from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: fit-content;
  background-color: var(--text-color);
  padding-bottom: 8px;
  margin: 32px 0px;
`;

export const StyledBestPlayersContainer = styled.div`
  padding: 24px 0px 0px 24px;

  > span {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
    color: var(--button-color);
    display: block;
    padding-bottom: 8px;
  }
`;

export const StyleCircleDesign = styled.div`
  background-color: var(--main-bg-color);
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: -16px;
  left: 0;
  right: 0;
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const StyledWhiteCircle = styled(StyleCircleDesign)`
  background-color: var(--text-color);
  width: 24px;
  height: 24px;
  top: -12px;
`;

export const StyledPlayerDetails = styled.div`
  margin-top: 8px;
  text-align: center;
`;

export const StyledPlayerRecord = styled.div`
  margin: 16px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow: hidden;
  text-align: left;

  span {
    color: var(--card-secondary-color);
    font-weight: 200;
    padding-left: 16px;
  }
`;
