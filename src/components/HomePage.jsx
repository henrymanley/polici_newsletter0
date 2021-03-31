import AppTheme from '../App.css';
import React, { useEffect } from 'react';
import Form from "./Form";
import Footer from "./Footer";
import Water from '../assets/water.png';
import AOS from 'aos'
import 'aos/dist/aos.css';
import ReactGA from 'react-ga';

AOS.init();

class Home extends React.Component {

    render() {
        console.log(window.location.pathname + window.location.search);
        ReactGA.pageview(window.location.pathname + window.location.search);
        return (
            <div>

                <div style={AppTheme}>

                    <div className="App">
                        <div style={{ position: "relative", height: '800px', overflow: "hidden", marginRight: '-40px' }}>

                            <div className="row">
                                <div className="column1" style={{ minWidth: '540px' }}>
                                    <Form></Form>
                                </div>

                                <div className="column2" style={{ backgroundColor: "#000000", position: "relative", width: "100%" }}>
                                    <div className="outer">
                                        <div className="inner">
                                            <img className="waterfallimage" src={Water} alt="Infographics" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div style={{ position: 'absolute', width: '100%' }}>
                            <Footer></Footer>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;