import React, {Component} from "react";
import AOS from "aos";
import {withRouter} from "react-router-dom";
import '../App.css';

class Submit extends Component {

    handleClick = () => {
        this.props.history.push("./Demo");
    }

    constructor(props) {
        super(props);
        this.state = {
            apiResponse: "",
            email:''};
        AOS.init({duration: 1000});

    }

    //changing state as you type into form
    updateEmail = (event)=> {
        let email = event.target.value
        this.setState({email: email})
        console.log("updated")
    }
    //submitting email to database
    addEmail = (event)=> {
        event.preventDefault()
        console.log(this.state)
        fetch('https://main.d2957ulfajgvdq.amplifyapp.com/api/email/', {
            method: 'post',
            body: new URLSearchParams({
                'email': this.state.email
            })
        })
    }


    //test to see if front end server is connected to backend API
    // callAPI() {
    //     fetch("http://localhost:8000/")
    //     .then(res => res.text())
    //     .then(res => this.setState({ apiResponse: res }));
    // }

    componentWillMount() {
        //this.callAPI();
    }
    render(){
        return (
            <div >
                <form  noValidate autoComplete="on" onSubmit={this.addEmail} style={{flex:'60%'}}>
                    <h2>Try it out! 🚀</h2>
                    <input
                        type='text'
                        placeholder="Email"
                        name="email"
                        onChange={this.updateEmail}
                    />
                    <div style={{flex:'40%'}}>
                        <input
                            type='submit'
                        />
                    </div>

                </form>
            </div>
        );
    }
}

export default withRouter(Submit);