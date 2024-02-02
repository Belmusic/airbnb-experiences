import { Typography } from "@mui/material";
import React from "react";
import Star from "../../public/images/star.png";

interface CardProps {
  img: string;
  rating: number;
  reviewCount: number;
  location: string;
  title: string;
  price: number;
}

const Card: React.FC<CardProps> = ({
  img,
  rating,
  reviewCount,
  location,
  title,
  price,
}: CardProps) => {
  return (
    <div className="card">
      <img src={`/images/${img}?url`} className="card__image" alt={title} />
      <div className="card__stats">
        <img src={Star} className="star" alt="Star" />
        <span>{rating}</span>
        <span className="grey">({reviewCount}) • </span>
        <span className="grey">{location}</span>
      </div>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="h4">
        <strong>From ${price} / </strong>
        person
      </Typography>
    </div>
  );
};

export default Card;
