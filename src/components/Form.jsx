import React, {Component} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

export default class OutlinedButtons extends Component {
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
        fetch('http://localhost:8000/api/email/', {
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
        <div style={{
            textAlign:'left',
            paddingLeft: '40px',
            marginBottom:'40px',
            color: "#FFFFFC",
        }}>
            <h1 style={{fontSize:"70px"}} data-aos="zoom-in"><a href="https://www.polici.org/"> polici </a></h1>
            <div style={{
                textAlign: 'left',
                paddingTop: '50px',
                paddingBottom: '50px',
                color: "#FFFFFC",
                width: '70%',
            }}>
                <h2>
                    <bf>Bringing Data to Your Day In Under Three Minutes 📈</bf>
                </h2>


                <hr></hr>
                <h3>
                    Get the free, weekly email that brings data science,
                    cutting edge research findings, and a splash of humor to the headlines.
                    <br />
                    <br /> <a style={{
                    textDecoration:'underline'
                }}>Check out our last issue. </a>
                </h3>
            </div>
            <div data-aos="fade-right" data-aos-easing="ease-in-sine">
                <form  noValidate autoComplete="on" onSubmit={this.addEmail}>
                    <h2>Try it out! 🚀</h2>
                    <input
                        type='text'
                        defaultValue="Your Email"
                        onChange={this.updateEmail}
                    />
                    <input
                        type='submit'
                    />
                </form>
            </div>

        <p >{this.state.apiResponse}</p>
    </div>
);
    }
}