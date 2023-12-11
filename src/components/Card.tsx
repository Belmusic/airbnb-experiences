import { Typography } from "@mui/material";
import Swimmer from "../assets/images/swimmer.png";
import Star from "../assets/images/star.png";

function Card() {
  return (
    <div className="card">
      <img src={Swimmer} className="card__image" />
      <div className="card__stats">
        <img src={Star} className="star" />
        <span>5.0</span>
        <span className="grey">(6) • </span>
        <span className="grey">USA</span>
      </div>
      <Typography variant="h4">Life Lessons with Katie Zaferes</Typography>
      <Typography variant="h4">
        <strong>From $136 / </strong>
        person
      </Typography>
    </div>
  );
}

export default Card;
