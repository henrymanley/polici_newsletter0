import React from 'react';
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import Form from "./Form";
import Footer from "./Footer";
import '../App.css';
import Water from '../assets/water.png';
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

const theme = createMuiTheme({
    backgroundColor: "#000000",
    typography: {
        fontFamily: [
            'Karla',
            'sans-serif',
        ].join(','),
    },});

class Home extends React.Component {

    render() {
        return (
            <div>

                <ThemeProvider theme={theme}>

                    <div className="App">
                        <div style={{position: "relative", height: '800px', overflow: "hidden"}}>

                            <div className="row">
                                <div className="column1"  style={{minWidth: '570px'}}>
                                    <Form></Form>
                                </div>

                                <div className="column2" style={{backgroundColor: "#000000", position: "relative", width:"100%"}}>
                                    <div className="outer">
                                        <div className="inner">
                                            <img className="waterfallimage" src={Water} alt="Infographics"/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div style={{position: 'absolute', width: '100%'}}>
                            <Footer></Footer>
                        </div>

                    </div>
                </ThemeProvider>
            </div>
        );
    }
}

export default Home;