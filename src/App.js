import './App.css';
import Submission from "./components/Submission";
import SignIn from "./components/SignIn";
import HomePage from "./components/HomePage";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Switch, BrowserRouter as Router, Route, withRouter } from "react-router-dom";

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
      <div>
          <Router>
              <Switch>
                  <ThemeProvider theme={theme}>
                      <Route exact path="/" component={HomePage}></Route>
                      <Route exact path="/Newsletter" component={withRouter(Submission)}></Route>
                      <Route exact path="/Sign-In" component={withRouter(SignIn)}></Route>
                  </ThemeProvider>
              </Switch>
          </Router>
      </div>
  );
}

export default App;