import "./App.css";
import { Header } from "./components/header/Header";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { Footer } from "./components/footer/Footer";
import { MainBody } from "./components/mainBody/MainBody";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainBody />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
