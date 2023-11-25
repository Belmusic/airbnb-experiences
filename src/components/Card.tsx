import { Typography } from "@mui/material";
import Swimmer from "../assets/images/swimmer.png";
import Star from "../assets/images/star.png";

function Card() {
  return (
    <div className="card">
      <img src={Swimmer} className="card__image" />
      <div className="card--stats">
        <img src={Star} className="card__star" />
        <span>5.0</span>
        <span>(6) • </span>
        <span>USA</span>
      </div>
      <Typography variant="body1">Life Lessons with Katie Zaferes</Typography>
      <Typography variant="body1">From $136 / person</Typography>
    </div>
  );
}

export default Card;
