import React, {Component} from 'react';
import Contact from "../components/Contact";
import {BrowserRouter as Router, Link, withRouter} from "react-router-dom";

class Footer extends Component {
    handleClick = () => {
        this.props.history.push("./About");
    }

    handleClick1 = () => {
        this.props.history.push("./Privacy");
    }

    handleClick2 = () => {
        this.props.history.push("./Terms");
    }

    render() {
        return (
            <div style={{
                backgroundColor: 'white',
                fontWeight: 'bold',
                display: 'flex',
                flexFlow:'row wrap',
                padding: '20px',
                width: '100%',
                minWidth: '200px'
            }}>
                <div>

                    <Router>
                        <Link to="./About">
                            <p style={{
                                padding: ' 5px 10px',
                                float: 'left',
                                color: 'black',
                            }}><a onClick={this.handleClick}>About Us</a></p>
                        </Link>
                    </Router>


                    <Router>
                        <Link to="./Privacy">
                            <p style={{
                                padding: ' 5px 10px',
                                float: 'left',
                                color: 'black',
                            }}><a onClick={this.handleClick1}>Privacy Policy</a></p>
                        </Link>
                    </Router>


                    <Router>
                        <Link to="./Terms">
                            <p style={{
                                padding: ' 5px 10px',
                                float: 'left',
                                color: 'black',
                            }}><a onClick={this.handleClick2}>Terms of Use</a></p>
                        </Link>
                    </Router>
                </div>

                <div style={{
                    marginRight: '0px'
                }}>
                    <Contact></Contact>
                </div>
            </div>

        );
    }
}
export default withRouter(Footer);