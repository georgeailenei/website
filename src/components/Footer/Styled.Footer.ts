import styled from "styled-components";

export const StyledContainer = styled.footer`
  padding: 20px 0;
  color: white;
  background: black;
  display: flex;
  align-items: center;

  ul {
    margin-left: 16px;
  }

  li {
    display: inline;
    padding: 0 10px;
    list-style: none;

    a {
      text-decoration: none;
    }
  }
`;

export const StyledCopyrightWrapper = styled.div`
  margin-left: auto;
  margin-right: 16px;
`;
