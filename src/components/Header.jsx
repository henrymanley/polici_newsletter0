import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import { Link, BrowserRouter as Router } from 'react-router-dom'
import SignIn from "../components/SignIn";


export default function Header() {
    return (
        <Router>
            <div style={{
                float:'right',
                top:'-40px',
                margin:'20px'}}>
                <Link to="./SignIn">
                    <IconButton>
                        <AccountCircleIcon style={{
                            color:'white'}}></AccountCircleIcon>
                    </IconButton>
                </Link>

            </div>
        </Router>


    );
}