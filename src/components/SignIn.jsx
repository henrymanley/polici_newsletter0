import React, { Component } from 'react';
import '../Signup.css'
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

            <div style ={{color: 'white'}}>
                <div className="App">
                    <div >
                        <h1> Log In 🔒</h1>
                    </div>
                    <div className="signup-form-container">
                        <form onSubmit={this.handleSubmit} className="signup-form">
                            <Container>
                                <Row >
                                    <Col >
                                        <p><label htmlFor="userkey" className='Firstnamet' style ={{color: 'white', textAlign:'left'}}>User Email</label></p>
                                        <input id="userkey" name="userkey" type="text"

                                        />
                                    </Col>
                                </Row>
                                <Row >
                                    <Col  >
                                        <p> <label htmlFor="userval" className="Lastnamet" style ={{color: 'white', textAlign:'left'}}>Password</label></p>
                                        <input id="userval" name="userval" type="text"

                                        />
                                    </Col>
                                </Row>
                                <Row >
                                    <input type="submit" value="Log In"
                                           className="submit-button" />
                                </Row>
                            </Container>

                        </form>
                    </div>
                </div>
            </div >
        );
    }
}