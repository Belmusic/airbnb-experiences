import { Typography } from "@mui/material";
import PhotoGrid from "../../public/images/photo-grid.png";

function Hero() {
  return (
    <section className="hero">
      <img src={PhotoGrid} alt="photo-grid" className="hero__photo" />
      <Typography variant="h1" className="hero__header">
        Online Experiences
      </Typography>
      <Typography variant="body1" className="hero__text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </Typography>
    </section>
  );
}

export default Hero;
