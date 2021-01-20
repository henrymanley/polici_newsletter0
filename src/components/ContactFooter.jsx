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

class ContactFooter extends Component {
    handleClick = () => {
        this.props.history.push("./Sign-In");
    }

    render() {
        return (

            <div style={{width: '100%',  backgroundColor: 'white'}}>

                <div style={{
                    fontWeight: 'bold',
                    display: 'flex',
                    justifyContent:'center',
                    paddingLeft:'30px'
                }}>
                    <div style ={{textAlign:'center', width: '50%', margin:'auto', minWidth:'550px', paddingLeft:'10px'}}>
                        <p style={{
                            padding: ' 5px 10px',
                            float: 'left'
                        }}>Polici PBC © 2021 </p>

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

                        <div style={{width: '100%', display: 'inline-flex'}}>
                            <Box textAlign="right" fontWeight="fontWeightBold" fontSize="h5.fontSize">

                                <IconButton target="_blank" href="mailto:founders@polici.org">
                                    <EmailIcon style={{
                                        padding: "10px 5px",
                                        color: 'black'
                                    }}/>
                                </IconButton>

                                <IconButton target="_blank" href="https://www.linkedin.com/company/polici">
                                    <LinkedInIcon style={{
                                        padding: "10px 5px",
                                        color: 'black'
                                    }}/>
                                </IconButton>
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
                    </div>
                </div>

            </div>

        );
    }
}
export default withRouter(ContactFooter);