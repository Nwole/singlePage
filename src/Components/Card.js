import React from "react";
import { StyledCard, Image } from "./Styles/Card.styled";
import { content } from "./Content";

const Card = () => {
  return (
    <div>
      {content.map((el) => {
        return (
          <StyledCard key={el.id}>
            <div>
              <h1>{el.title}</h1>
              <p>{el.body}</p>
            </div>
            <div>
              <Image src={el.image} alt="gee" />
            </div>
          </StyledCard>
        );
      })}
    </div>
  );
};

export default Card;
