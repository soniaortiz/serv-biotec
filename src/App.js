import "./App.css";
import theme from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { ThemeProvider } from "@mui/material/styles";
import { Footer } from "./components/footer/Footer";
import { Gallery } from "./components/gallery/Gallery";
import { Welcome } from './components/welcome/Welcome';
import { Nosotros } from './components/nosotros/Nosotros';
import { listaDeProductos } from './components/product/productos';
import {ProductPage} from './components/productPage/ProductPage'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <div
            style={{
                margin: 'auto',
                width: '80%',
                height: '100vh'
            }}
        >
            <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="nuestros-productos" element={<Gallery />}/>
            {/* nuestros productos sub path */}
            {
              listaDeProductos.map((prod)=>{
                return <Route path={`nuestros-productos/${prod.path}`} element={<ProductPage />}/>

              })
            }
            <Route path="blog" element={<Gallery />}/>
            <Route path="servicios" element={<Gallery />}/>
            <Route path="nosotros" element={<Nosotros />}/>

          </Routes>
        </BrowserRouter>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
