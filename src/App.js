import './App.css';
import Form from "./components/Form";
import Submission from "./components/Submission";
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Router, Route} from 'react-router-dom'



const theme = createMuiTheme({
    backgroundColor: "#000000",
    typography: {
        fontFamily: [
            'Karla',
            'sans-serif',
        ].join(','),
    },});

function App() {
  return (
      <ThemeProvider theme={theme}>
              <Header />
          <div className="App">
              <div className="box">
                  <div><Form></Form></div>
              </div>

              <Footer></Footer>
              <Submission />
              <SignIn />
          </div>
      </ThemeProvider>

  );
}

export default App;