import React from 'react';
import Henry from "../assets/henry_headshot.png";
import Aadi from '../assets/aadi_headshot.png';
import {withRouter} from "react-router-dom";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";
import ContactFooter from "./ContactFooter";
import Header from "./Header";
import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init();

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            apiResponse: "",
            email:''};
        AOS.init({duration: 2000});

    }

    render() {
        return (
            <div className="App" >
                <Header />
                <div style={{width:"50%", margin:'auto', maxWidth:'650px', color:'white', textAlign:'left', minWidth:'350px', paddingTop:'30px'}}>
                    <br /><br /><br />
                    <h1>Delivering the best information out there, in the easiest way possible. 📊 </h1>
                    <hr />
                    <br />
                    <h3>We started Polici because we realized there was a huge disconnect between academia
                        and literally everyone else. Years and millions of dollars are spent to come up with
                        the best research and information, yet it is presented in the most indigestible way.
                        Using data science and machine learning, we take these papers in and deliver the
                        information in a way that you and I can both understand.  Thanks for visiting us and we
                        hope you sign-up and stick around! </h3>
                    <br />
                    <h1>Meet the Founders 💡</h1>
                    <hr />
                    <br />

                    <div style={{flex:'80%', margin:'auto', textAlign:'center'}}>

                        <a href="https://www.henrymanley.com/">
                            <div data-aos="zoom-in-left">
                                <img className="aboutimage" src={Henry} alt="Henry" style={{borderRadius:'20px', width:'80%'}}/>
                            </div>
                            <h2>Henry Manley</h2>
                        </a>
                        <h3>Junior, Cornell University</h3>

                        <IconButton target="_blank" href="https://www.linkedin.com/in/henry-manley-681213173/">
                            <LinkedInIcon style={{
                                paddingTop: "10px",
                                paddingBottom: "10px",
                                color: 'white'
                            }}/>
                        </IconButton>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <div data-aos="zoom-in-right">
                            <img className="aboutimage" src={Aadi} alt="Aadi"style={{borderRadius:'20px',width:'80%', marginTop:'30px'}}/>
                        </div>
                        <h2>Aadi Kulkarni</h2>
                        <h3>Junior, Cornell University</h3>

                        <IconButton target="_blank" href="https://www.linkedin.com/in/aadik/">
                            <LinkedInIcon style={{
                                paddingTop: "10px",
                                paddingBottom: "10px",
                                color: 'white'
                            }}/>
                        </IconButton>
                    </div>

<hr style={{marginBottom:'60px'}} />
                </div>
                <ContactFooter />
            </div>

        );
    }
}
export default withRouter(About);