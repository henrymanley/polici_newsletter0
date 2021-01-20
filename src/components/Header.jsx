import React, {Component} from 'react';
import {BrowserRouter as Router, Link, withRouter} from "react-router-dom";

class Header extends Component {
    handleClick = () => {
        this.props.history.push("/");
    }

    render() {
        return (
            <Router>
                <Link to="/">
                    <div onClick={this.handleClick} style={{height:'85px',
                        position:'fixed', width:"100%",
                        backgroundColor:'black',
                        marginTop:'-10px',
                        zIndex:'99',
                        textAlign:'center',
                        marginBottom:"0px"}}>
                        <h1>
                            polici 🚀

                        </h1>
                        <div style={{marginTop:"0px"}}>
                            <hr />
                        </div>

                    </div>
                </Link>
            </Router>
        );
    }
}
export default withRouter(Header);