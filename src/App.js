import Theme from './App.css';
import Submission from "./components/Submission";
import SignIn from "./components/SignIn";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import NewsletterDemo from "./components/NewsletterDemo";
import { Switch, BrowserRouter as Router, Route, withRouter, Redirect } from "react-router-dom";


function App() {
  return (
      <div>
          <Router>
              <Switch>
                  <div theme={Theme}>
                      <Route exact path="/" component={withRouter(HomePage)}></Route>
                      <Route exact path="/Newsletter" component={withRouter(Submission)}></Route>
                      <Route exact path="/Sign-In" component={withRouter(SignIn)}></Route>
                      <Route exact path="/Demo" component={withRouter(NewsletterDemo)}></Route>
                      <Route exact path="/Privacy" component={withRouter(Privacy)}></Route>
                      <Route exact path="/About" component={withRouter(About)}></Route>
                      <Route exact path="/Terms" component={withRouter(Terms)}></Route>
                  </div>
              </Switch>
          </Router>
      </div>
  );
}

export default App;