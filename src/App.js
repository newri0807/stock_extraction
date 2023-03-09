import { StyledEngineProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";
import { Login } from "./pages/Login";
import Stock from "./pages/Stock";
function App() {
  return (
    <div id="background">
      <StyledEngineProvider injectFirst>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/stock" element={<Stock />} />
        </Routes>
        <Footer />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
