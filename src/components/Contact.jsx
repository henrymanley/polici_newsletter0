import React, {Component} from 'react';
import Box from '@material-ui/core/Box';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import {BrowserRouter as Router, Link, withRouter} from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

class Contact extends Component {
    handleClick = () => {
        this.props.history.push("./Sign-In");
    }

    render() {
        return (
            <div style={{width: '100%', display: 'inline-flex', minWidth:"100px"}}>
                <Box textAlign="right" fontWeight="fontWeightBold" fontSize="h5.fontSize" style={{marginRight: '30px'}}>

                    <IconButton target="_blank" href="https://www.instagram.com/policiorg">
                        <InstagramIcon style={{
                            padding: "10px 5px",
                            color: 'black',
                        }}/>
                    </IconButton>
                    <IconButton target="_blank"
                                href="https://www.facebook.com/policiorg/?eid=ARBsW1q_Jkj0gHDr3ymEEZjmkC-GDHK-5u7Hzv2R0hV0djyqOY0sDMQfKyKJ0LgVPG2CgtPooBvzRKTD">
                        <FacebookIcon style={{
                            padding: "10px 5px",
                            color: 'black',
                        }}/>
                    </IconButton>
                    <IconButton target="_blank" href="https://twitter.com/policiorg?lang=en">
                        <TwitterIcon style={{
                            padding: "10px 5px",
                            color: 'black'
                        }}/>
                    </IconButton>
                    <Router>
                        <Link to="./Sign-In">
                            <IconButton onClick={this.handleClick}>
                                <AccountCircleIcon style={{
                                    color: 'black'
                                }}></AccountCircleIcon>
                            </IconButton>
                        </Link>
                    </Router>
                </Box>
            </div>
        );
    }
}
export default withRouter(Contact);