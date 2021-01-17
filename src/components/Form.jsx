import React, {Component} from 'react';

export default class OutlinedButtons extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            apiResponse: "",
            email:''};
            
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
            <h1 style={{fontSize:"70px"}} ><a href="https://www.polici.org/"> polici </a></h1>
            <div style={{
                textAlign: 'left',
                paddingTop: '50px',
                paddingBottom: '50px',
                color: "#FFFFFC",
                width: '50%',
            }}>
                <h2>
                    <bf>Bringing Data to Your Day In Under Three Minutes 📈</bf>
                </h2>


                <hr></hr>
                <p>
                    Get the free, weekly email that brings data science,
                    cutting edge research findings, and a splash of humor to the headlines.
                    <br />
                    <br /> <a style={{
                    textDecoration:'underline'
                }}>Check out our last issue. </a>
                </p>
            </div>
            <form  noValidate autoComplete="on" onSubmit={this.addEmail}>
                <p>Submit your email if you want to follow our Newsletter!</p>
                <input
        type='text'
        onChange={this.updateEmail}
      />
      <input
        type='submit'
      />
            </form>

        <p >{this.state.apiResponse}</p>
    </div>
);}
    
}