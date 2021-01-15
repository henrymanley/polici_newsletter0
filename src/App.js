import './App.css';
import Form from "./components/Form";
import Footer from "./components/Footer";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    backgroundColor: "#000000",
    height: '100%',
    width: '100%',
    typography: {
        fontFamily: [
            'Karla',
            'sans-serif',
        ].join(','),
    },});

function App() {
  return (
      <ThemeProvider theme={theme}>
          <div className="App">
              <header className="App-header"></header>

              <div className="box">
                  <div><Form></Form></div>
              </div>

              <Footer></Footer>
          </div>
      </ThemeProvider>

  );
}

export default App;
git