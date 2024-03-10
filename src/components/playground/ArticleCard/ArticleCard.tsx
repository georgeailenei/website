import React from "react";
import { JsonPlaceHolderData } from "../../../../types";
import { StyledCard, StyledSection } from "./Styled.ArticleCard";

type Props = {
  data: JsonPlaceHolderData[];
};

export default function ArticleSection({ data }: Props) {
  return (
    <>
      <StyledSection>
        {data
          .map((card) => (
            <StyledCard key={card.id}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </StyledCard>
          ))
          .slice(0, 3)}
      </StyledSection>
    </>
  );
}
