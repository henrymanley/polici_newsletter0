import './App.css';
import Submission from "./components/Submission";
import SignIn from "./components/SignIn";
import HomePage from "./components/HomePage";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import NewsletterDemo from "./components/NewsletterDemo";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Switch, BrowserRouter as Router, Route, withRouter, Redirect } from "react-router-dom";

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
                      <Route exact path="/" component={withRouter(HomePage)}></Route>
                      <Route exact path="/Newsletter" component={withRouter(Submission)}></Route>
                      <Route exact path="/Sign-In" component={withRouter(SignIn)}></Route>
                      <Route exact path="/Demo" component={withRouter(NewsletterDemo)}></Route>
                      <Route exact path="/Privacy" component={withRouter(Privacy)}></Route>
                      <Route exact path="/Terms" component={withRouter(Terms)}></Route>
                  </ThemeProvider>
              </Switch>
          </Router>
      </div>
  );
}

export default App;