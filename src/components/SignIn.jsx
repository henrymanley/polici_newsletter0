import React, { Component } from 'react';
import '../Signup.css'
import '../App.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'

const key = 'founders@polici.org'
const val = 'test'

export default class SignIn extends Component {

    constructor() {
        super();
        this.state = {
            redir: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        var userkey = data.get('userkey');
        var userval = data.get('userval');
        if (userkey === key && userval === val) {
            this.setState({ redir: true })
        }
    }

    render() {
        if (this.state.redir) {
            return <Redirect to='/Newsletter' />
        }
        return (
            <div className="App">
                <header />
                <div style ={{marginTop:'50px', color:'white'}}>
                    <body>
                    <h1> Log In 🔒</h1>
                <div className="signup-form-container">
                    <form onSubmit={this.handleSubmit} className="signup-form">

                            <Row >
                                    <p><label htmlFor="userkey" className='Firstnamet' style ={{color: 'white', textAlign:'left', marginRight:'42px'}}>Email</label></p>
                                    <input id="userkey" name="userkey" type="text"

                                    />
                            </Row>
                            <Row >
                                    <p> <label htmlFor="userval" className="Lastnamet" style ={{color: 'white', textAlign:'left', marginRight:'10px'}}>Password</label></p>
                                    <input id="userval" name="userval" type="text"

                                    />
                            </Row>
                            <Row >
                                <input type="submit" value="Submit"
                                       className="submit-button" style={{marginBottom: '60px', margin:'auto'}}/>
                            </Row>

                    </form>
                </div>
    </body>
        <footer />
                </div>
            </div>

        );
    }
}