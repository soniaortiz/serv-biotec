import './App.css';
import { Header } from './components/Header';
import theme from './theme';
import { ThemeProvider }from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>

  );
}

export default App;
