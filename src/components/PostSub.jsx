import React, { Component } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ReactGA from "react-ga";


class PostSub extends Component {
  render() {
    console.log(window.location.pathname + window.location.search);
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <div className="App" >
        <Header />
        <div style={{ position: 'relative', width: "50%", margin: 'auto', maxWidth: '650px', color: 'white', minWidth: '350px', paddingTop: '30px' }}>
          <br /><br /><br />
          <h1 style={{ fontSize: "40px", textAlign: "center" }}>Thank you for subscribing.</h1>
          <br />
          <p style={{ textAlign: "center" }}>Add Polici to your "Safe Senders" list to make sure we don't get stuck in your spam. </p>
          <p style={{ textAlign: "center" }}>Wouldn't that be a shame...</p>
          <br />
          <div style={{ flex: '40%', margin: 'auto' }}>
            <button><a href="https://www.polici.org/">Back to Home</a></button>
          </div>


        </div>
        <div style={{ position: 'absolute', width: '100%', bottom: 0 }}>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default withRouter(PostSub);

