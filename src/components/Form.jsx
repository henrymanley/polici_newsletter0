import React, {Component} from 'react';
import Email from '@email-templates';
import nodemailer from 'nodemailer';
import axios from 'axios';
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
    resetForm(){

        this.setState({email: ''});
    }

    async function sendEmail(event) {
      const nodemailer = require('../lib/nodemailer');
      // Create a SMTP transporter object
      let transporter = nodemailer.createTransport({
          sendmail: true,
          newline: 'windows',
          logger: false

          // THESE NEED TO BE CHANGED. REFER TO https://nodemailer.com/smtp/
          host: "smtp.example.com",
          port: 587,
          secure: false, // upgrade later with STARTTLS
          auth: {
            user: "username",
            pass: "password"
          }

      });

      transporter.verify((error, success) => {
        if (error) {
          console.log(error);
        } else {
          console.log('All works fine!');
        }
      });

      // Message object
      let message = {
          from: 'Polici Founders <founders@polici.org>',

          // Comma separated list of recipients
          to: 'Test <tech@polici.org>',

          // Subject of the message
          subject: 'Test confirmation',

          // HTML body
          html: './emails/confirmation/welcome.html',
      };

      let info = await transporter.sendMail(message);
      console.log('Message sent successfully as %s', info.messageId);

      // const Email = require('email-templates');
      //
      // const email = new Email({
      //   message: {
      //     from: 'founders@polici.org'
      //   },
      //   // uncomment below to send emails in development/test env:
      //   send: true
      //   transport: {
      //     jsonTransport: true
      //   }
      // });
      //
      // email
      //   .render({
      //     path: 'emails/welcome',
      //     juiceResources: {
      //       preserveImportant: true,
      //       webResources: {
      //         relativeTo: path.resolve('Emails')
      //       }
      //     }
      //   }, {
      //     name: event.target.value
      //   })
      //   .then(console.log)
      //   .catch(console.error);
    //   email
    //     .send({
    //       template: 'confirmation',
    //       message: {
    //         to: 'tech@polici.org'   //event.target.value NEED TO VERIFY VALID EMAIL AND NOT ALREADY IN SYSTEM
    //       },
    //       locals: {
    //         name: 'Elon'
    //       }
    //     })
    //     .then(console.log)
    //     .catch(console.error);
    }

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
            <form noValidate autoComplete="on"
              onSubmit={
                this.addEmail
                this.sendEmail().catch(err => {
                  console.error(err.message);
                  process.exit(1);
                });

                this.resetForm
              }>
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
