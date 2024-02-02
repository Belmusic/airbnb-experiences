// MUI
import { Container, ThemeProvider } from "@mui/material";
import { theme } from "../layout/Theme";

// Components
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";

// Other imports
import data from "../data";

function App() {
  const cards = data.map((event) => (
    <Card
      img={event.coverImg}
      rating={event.stats.rating}
      reviewCount={event.stats.reviewCount}
      location={event.location}
      title={event.title}
      price={event.price}
    />
  ));

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container>
        <Hero />
        <div className="cards">{cards}</div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
