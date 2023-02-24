import { StyledEngineProvider } from "@mui/material";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Stock from "./pages/Stock";
function App() {
  return (
    <div id="background">
      <StyledEngineProvider injectFirst>
        <Header />
        <Stock />
        <Footer />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
