import "./App.css";
import theme from "./theme";
import { MainBody } from "./components/mainBody/MainBody";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./components/header/Header";
import { ThemeProvider } from "@mui/material/styles";
import { Footer } from "./components/footer/Footer";
import { Gallery } from "./components/gallery/Gallery";
import { Welcome } from './components/welcome/Welcome';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainBody displayComponent= {<Welcome />} />}/>
            <Route path="/blog" element={<MainBody />}/>
            <Route path="/productos" element={<MainBody />}/>
            <Route path="/servicios" element={<MainBody />}/>
            <Route path="/nosotros" element={<MainBody />}/>

          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
