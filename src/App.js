import Theme from './App.css';
import Submission from "./components/Submission";
import SignIn from "./components/SignIn";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import NewsletterDemo from "./components/NewsletterDemo";
import PostSub from "./components/PostSub";
import RouteChangeTracker from "./components/RouteChangeTracker";
import { Switch, BrowserRouter as Router, Route, withRouter, Redirect } from "react-router-dom";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

// const TRACKING_ID = "UA-192376816-1"; // YOUR_OWN_TRACKING_ID
// ReactGA.initialize(TRACKING_ID);

// const history = createBrowserHistory();

// // Initialize google analytics page view tracking
// history.listen(location => {
//     console.log("pageview: ", location.pathname);
//     ReactGA.set({ page: location.pathname }); // Update the user's current page
//     ReactGA.pageview(location.pathname); // Record a pageview for the given page
// });

import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: "GTM-TP4KV45"
};

TagManager.initialize(tagManagerArgs)

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <div theme={Theme}>
                        <Route exact path="/" component={withRouter(HomePage)}></Route>
                        <Route exact path="/Marty" component={withRouter(HomePage)}></Route>
                        <Route exact path="/Albert" component={withRouter(HomePage)}></Route>
                        <Route exact path="/Nicholas" component={withRouter(HomePage)}></Route>
                        <Route exact path="/Christian" component={withRouter(HomePage)}></Route>
                        <Route exact path="/Manognya" component={withRouter(HomePage)}></Route>
                        <Route exact path="/Daniel" component={withRouter(HomePage)}></Route>
                        <Route exact path="/Sameer" component={withRouter(HomePage)}></Route>
                        <Route exact path="/Sakshi" component={withRouter(HomePage)}></Route>
                        <Route exact path="/Emily" component={withRouter(HomePage)}></Route>
                        <Route exact path="/ShengQi" component={withRouter(HomePage)}></Route>

                        <Route exact path="/Newsletter" component={withRouter(Submission)}></Route>
                        <Route exact path="/Sign-In" component={withRouter(SignIn)}></Route>
                        <Route exact path="/Demo" component={withRouter(NewsletterDemo)}></Route>
                        <Route exact path="/Privacy" component={withRouter(Privacy)}></Route>
                        <Route exact path="/About" component={withRouter(About)}></Route>
                        <Route exact path="/Terms" component={withRouter(Terms)}></Route>
                        <Route exact path="/PostSub" component={withRouter(PostSub)}></Route>
                    </div>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
