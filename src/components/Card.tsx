import React from "react";
import { CardContainer } from "../styles";

interface CardProps {
  text: string;
}

const Card = (props: CardProps) => {
  return <CardContainer>{props.text}</CardContainer>;
};

export default Card;
