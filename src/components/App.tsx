// Material-UI
import { Container, ThemeProvider } from "@mui/material";
import { theme } from "../layout/Theme";

// Components
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container>
        <Hero />
        <Card />
      </Container>
    </ThemeProvider>
  );
}

export default App;
