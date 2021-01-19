import React from 'react';
import DemoTheme from '../Demo.css';
import Banner from '../assets/banner.png';
import Graph1 from '../assets/graph1.png';
import Graph2 from '../assets/graph2.png';
import Graph3 from '../assets/graph3.png';
import Graph4 from '../assets/graph4.png';
import Graph5 from '../assets/graph5.png';
import Graph6 from '../assets/graph6.png';
import {withRouter} from "react-router-dom";


class NewsletterDemo extends React.Component {
    render() {
        return (
            <div style={DemoTheme}>
                <div style={{color: 'white', margin: 'auto', width:'75%', maxWidth:'650px'}} >
                    <div className="spacer"/>
                    <div className="spacer"/>
                    <div className="grid-container" style={{backgroundColor:"#000000"}}>
                    </div>
                    <div className ="roundtop">
                        <div className="grid-container" style={{backgroundColor:"white", padding:'10px', color:'black'}}>
                            <div style={{fontSize:'30px', paddingLeft:'20px'}}>
                                <a href="https://www.polici.org/"><h1 style={{textAlign:'left', color:'black'}}>polici</h1></a>

                            </div>
                            <p className="newslp" style={{textAlign:'right'}}>January 18, 2021</p>
                        </div>


                        <div style={{width: '100%', textAlign: 'center', padding:'0px'}}>
                            <div className="newsh1">
                                <h1>Get The Picture?</h1>
                            </div>

                        </div>

                        <img className="newsletterimage" src={Banner} alt="Banner"/>

                        <h2>Good Morning</h2>
                        <hr />

                        <div className="roundbottom">
                            <p className="newslp">
                                When you wake up in the morning, what’s the first thing you do besides aggressively shutting off
                                your alarm? We’d guess probably checking your phone. More specifically, scrolling through
                                Facebook meme pages as if it was the newspaper or leaving your ex’s DM on seen for the third
                                time this week (they don’t seem to go away, do they?).
                                <br/> <br/>
                                In just one <a
                                href="https://www.statista.com/statistics/195140/new-user-generated-content-uploaded-by-users-per-minute/?utm_source=newsletter&utm_medium=email&utm_campaign=why_cant_we_log_off_the_silicon_valley_glue_thats_got_you_stuck&utm_term=2021-01-18"> internet
                                minute </a> in August of 2020, users around the world uploaded 347,222 Instagram stories and
                                shared 150,000 Facebook messages. That’s a whole lot of <a
                                href="https://www.washingtonpost.com/technology/2020/08/15/instagram-race-activism-slideshow-graphics/?utm_source=newsletter&utm_medium=email&utm_campaign=why_cant_we_log_off_the_silicon_valley_glue_thats_got_you_stuck"> infographics </a> and <a
                                href="https://www.theguardian.com/us-news/2020/apr/27/california-beaches-coronavirus-orange-county?utm_source=newsletter&utm_medium=email&utm_campaign=why_cant_we_log_off_the_silicon_valley_glue_thats_got_you_stuck&utm_term=2021-01-18"> pictures
                                of overcrowded beaches. </a> In the same year, with many of us bored in the house, TikTok took
                                over the saturated social media scene.
                                <br/> <br/>
                                This week, the Polici team embarked on a journey to understand why certain platforms, like
                                Instagram and Snapchat, stay afloat, while others, like Vine, <a
                                href="https://money.cnn.com/2017/01/17/technology/vine-shuts-down/index.html?utm_source=newsletter&utm_medium=email&utm_campaign=why_cant_we_log_off_the_silicon_valley_glue_thats_got_you_stuck&utm_term=2021-01-18"> walk
                                the plank.</a> We took a look at what each platform offers, controversy surrounding stolen
                                features, and their unique algorithms.
                                <br/> <br/>
                                So sit back, relax, and enjoy the data. Oh, and while you’re at it, follow us on social
                                media <bf> @policiorg. </bf>
                            </p>
                        </div>

                    </div>
                    <div className="spacer"/>



                    <div className ="roundtop">
                        <div style={{backgroundColor:"#00A478", padding:'10px', margin:'auto'}}>
                            <div className="headersect"> What's Trending? </div>
                        </div>
                        <img className="newsletterimage" src={Graph1} alt="Trends"/>
                        <div className="roundbottom">
                            <p className="newslp">

                                When you wake up in the morning, what’s the first thing you do besides aggressively shutting off
                                your alarm? We’d guess probably checking your phone. More specifically, scrolling through
                                Facebook meme pages as if it was the newspaper or leaving your ex’s DM on seen for the third
                                time this week (they don’t seem to go away, do they?).
                                <br/> <br/>
                                In just one <a
                                href="https://www.statista.com/statistics/195140/new-user-generated-content-uploaded-by-users-per-minute/?utm_source=newsletter&utm_medium=email&utm_campaign=why_cant_we_log_off_the_silicon_valley_glue_thats_got_you_stuck&utm_term=2021-01-18"> internet
                                minute </a> in August of 2020, users around the world uploaded 347,222 Instagram stories and
                                shared 150,000 Facebook messages. That’s a whole lot of <a
                                href="https://www.washingtonpost.com/technology/2020/08/15/instagram-race-activism-slideshow-graphics/?utm_source=newsletter&utm_medium=email&utm_campaign=why_cant_we_log_off_the_silicon_valley_glue_thats_got_you_stuck"> infographics </a> and <a
                                href="https://www.theguardian.com/us-news/2020/apr/27/california-beaches-coronavirus-orange-county?utm_source=newsletter&utm_medium=email&utm_campaign=why_cant_we_log_off_the_silicon_valley_glue_thats_got_you_stuck&utm_term=2021-01-18"> pictures
                                of overcrowded beaches. </a> In the same year, with many of us bored in the house, TikTok took
                                over the saturated social media scene.
                                <br/> <br/>
                                This week, the Polici team embarked on a journey to understand why certain platforms, like
                                Instagram and Snapchat, stay afloat, while others, like Vine, <a
                                href="https://money.cnn.com/2017/01/17/technology/vine-shuts-down/index.html?utm_source=newsletter&utm_medium=email&utm_campaign=why_cant_we_log_off_the_silicon_valley_glue_thats_got_you_stuck&utm_term=2021-01-18"> walk
                                the plank.</a> We took a look at what each platform offers, controversy surrounding stolen
                                features, and their unique algorithms.
                                <br/> <br/>
                                So sit back, relax, and enjoy the data. Oh, and while you’re at it, follow us on social
                                media <bf> @policiorg. </bf>
                            </p>
                        </div>

                    </div>
                    <div className="spacer"/>


                    <div className ="roundtop">
                        <div style={{backgroundColor:"#00A478", padding:'10px', margin:'auto'}}>
                            <div className="headersect"> Sharing is Caring? </div>
                        </div>
                        <img className="newsletterimage" src={Graph2} alt="Social Features"/>
                        <div className="roundbottom">
                            <p className="newslp">

                                When you wake up in the morning, what’s the first thing you do besides aggressively shutting off
                                your alarm? We’d guess probably checking your phone. More specifically, scrolling through
                                Facebook meme pages as if it was the newspaper or leaving your ex’s DM on seen for the third
                                time this week (they don’t seem to go away, do they?).
                                <br/> <br/>
                                In just one <a
                                href="https://www.statista.com/statistics/195140/new-user-generated-content-uploaded-by-users-per-minute/?utm_source=newsletter&utm_medium=email&utm_campaign=why_cant_we_log_off_the_silicon_valley_glue_thats_got_you_stuck&utm_term=2021-01-18"> internet
                                minute </a> in August of 2020, users around the world uploaded 347,222 Instagram stories and
                                shared 150,000 Facebook messages. That’s a whole lot of <a
                                href="https://www.washingtonpost.com/technology/2020/08/15/instagram-race-activism-slideshow-graphics/?utm_source=newsletter&utm_medium=email&utm_campaign=why_cant_we_log_off_the_silicon_valley_glue_thats_got_you_stuck"> infographics </a> and <a
                                href="https://www.theguardian.com/us-news/2020/apr/27/california-beaches-coronavirus-orange-county?utm_source=newsletter&utm_medium=email&utm_campaign=why_cant_we_log_off_the_silicon_valley_glue_thats_got_you_stuck&utm_term=2021-01-18"> pictures
                                of overcrowded beaches. </a> In the same year, with many of us bored in the house, TikTok took
                                over the saturated social media scene.
                                <br/> <br/>
                                This week, the Polici team embarked on a journey to understand why certain platforms, like
                                Instagram and Snapchat, stay afloat, while others, like Vine, <a
                                href="https://money.cnn.com/2017/01/17/technology/vine-shuts-down/index.html?utm_source=newsletter&utm_medium=email&utm_campaign=why_cant_we_log_off_the_silicon_valley_glue_thats_got_you_stuck&utm_term=2021-01-18"> walk
                                the plank.</a> We took a look at what each platform offers, controversy surrounding stolen
                                features, and their unique algorithms.
                                <br/> <br/>
                                So sit back, relax, and enjoy the data. Oh, and while you’re at it, follow us on social
                                media <bf> @policiorg. </bf>
                            </p>
                        </div>

                    </div>
                    <div className="spacer"/>



                    <div className ="roundtop">
                        <div style={{backgroundColor:"#00A478", padding:'10px', margin:'auto'}}>
                            <div className="headersect">Snapchat Memories... </div>
                        </div>
                        <img className="newsletterimage" src={Graph3} alt="Snapchat DAU"/>
                        <div className="roundbottom">
                            <p className="newslp">

                                When you wake up in the morning, what’s the first thing you do besides aggressively shutting off
                                your alarm? We’d guess probably checking your phone. More specifically, scrolling through
                                Facebook meme pages as if it was the newspaper or leaving your ex’s DM on seen for the third
                                time this week (they don’t seem to go away, do they?).
                                <br/> <br/>
                                In just one <a
                                href="https://www.statista.com/statistics/195140/new-user-generated-content-uploaded-by-users-per-minute/?utm_source=newsletter&utm_medium=email&utm_campaign=why_cant_we_log_off_the_silicon_valley_glue_thats_got_you_stuck&utm_term=2021-01-18"> internet
                                minute </a> in August of 2020, users around the world uploaded 347,222 Instagram stories and
                                shared 150,000 Facebook messages. That’s a whole lot of <a
                                href="https://www.washingtonpost.com/technology/2020/08/15/instagram-race-activism-slideshow-graphics/?utm_source=newsletter&utm_medium=email&utm_campaign=why_cant_we_log_off_the_silicon_valley_glue_thats_got_you_stuck"> infographics </a> and <a
                                href="https://www.theguardian.com/us-news/2020/apr/27/california-beaches-coronavirus-orange-county?utm_source=newsletter&utm_medium=email&utm_campaign=why_cant_we_log_off_the_silicon_valley_glue_thats_got_you_stuck&utm_term=2021-01-18"> pictures
                                of overcrowded beaches. </a> In the same year, with many of us bored in the house, TikTok took
                                over the saturated social media scene.
                                <br/> <br/>
                                This week, the Polici team embarked on a journey to understand why certain platforms, like
                                Instagram and Snapchat, stay afloat, while others, like Vine, <a
                                href="https://money.cnn.com/2017/01/17/technology/vine-shuts-down/index.html?utm_source=newsletter&utm_medium=email&utm_campaign=why_cant_we_log_off_the_silicon_valley_glue_thats_got_you_stuck&utm_term=2021-01-18"> walk
                                the plank.</a> We took a look at what each platform offers, controversy surrounding stolen
                                features, and their unique algorithms.
                                <br/> <br/>
                                So sit back, relax, and enjoy the data. Oh, and while you’re at it, follow us on social
                                media <bf> @policiorg. </bf>
                            </p>
                        </div>

                    </div>
                    <div className="spacer"/>



                    <div className ="roundtop">
                        <div style={{backgroundColor:"#00A478", padding:'10px', margin:'auto'}}>
                            <div className="headersect"> Stolen Thunder </div>
                        </div>
                        <img className="newsletterimage" src={Graph4} alt="Mergers"/>
                        <div className="roundbottom">
                            <p className="newslp">

                                When you wake up in the morning, what’s the first thing you do besides aggressively shutting off
                                your alarm? We’d guess probably checking your phone. More specifically, scrolling through
                                Facebook meme pages as if it was the newspaper or leaving your ex’s DM on seen for the third
                                time this week (they don’t seem to go away, do they?).
                                <br/> <br/>
                                In just one <a
                                href="https://www.statista.com/statistics/195140/new-user-generated-content-uploaded-by-users-per-minute/?utm_source=newsletter&utm_medium=email&utm_campaign=why_cant_we_log_off_the_silicon_valley_glue_thats_got_you_stuck&utm_term=2021-01-18"> internet
                                minute </a> in August of 2020, users around the world uploaded 347,222 Instagram stories and
                                shared 150,000 Facebook messages. That’s a whole lot of <a
                                href="https://www.washingtonpost.com/technology/2020/08/15/instagram-race-activism-slideshow-graphics/?utm_source=newsletter&utm_medium=email&utm_campaign=why_cant_we_log_off_the_silicon_valley_glue_thats_got_you_stuck"> infographics </a> and <a
                                href="https://www.theguardian.com/us-news/2020/apr/27/california-beaches-coronavirus-orange-county?utm_source=newsletter&utm_medium=email&utm_campaign=why_cant_we_log_off_the_silicon_valley_glue_thats_got_you_stuck&utm_term=2021-01-18"> pictures
                                of overcrowded beaches. </a> In the same year, with many of us bored in the house, TikTok took
                                over the saturated social media scene.
                                <br/> <br/>
                                This week, the Polici team embarked on a journey to understand why certain platforms, like
                                Instagram and Snapchat, stay afloat, while others, like Vine, <a
                                href="https://money.cnn.com/2017/01/17/technology/vine-shuts-down/index.html?utm_source=newsletter&utm_medium=email&utm_campaign=why_cant_we_log_off_the_silicon_valley_glue_thats_got_you_stuck&utm_term=2021-01-18"> walk
                                the plank.</a> We took a look at what each platform offers, controversy surrounding stolen
                                features, and their unique algorithms.
                                <br/> <br/>
                                So sit back, relax, and enjoy the data. Oh, and while you’re at it, follow us on social
                                media <bf> @policiorg. </bf>
                            </p>
                        </div>

                    </div>
                    <div className="spacer"/>


                    <div className ="roundtop">
                        <div style={{backgroundColor:"#00A478", padding:'10px', margin:'auto'}}>
                            <div className="headersect"> It's Personal </div>
                        </div>
                        <img className="newsletterimage" src={Graph5} alt="Algorithm"/>
                        <img className="newsletterimage" src={Graph6} alt="Content Time"/>
                        <div className="roundbottom">
                            <p className="newslp">

                                When you wake up in the morning, what’s the first thing you do besides aggressively shutting off
                                your alarm? We’d guess probably checking your phone. More specifically, scrolling through
                                Facebook meme pages as if it was the newspaper or leaving your ex’s DM on seen for the third
                                time this week (they don’t seem to go away, do they?).
                                <br/> <br/>
                                In just one <a
                                href="https://www.statista.com/statistics/195140/new-user-generated-content-uploaded-by-users-per-minute/?utm_source=newsletter&utm_medium=email&utm_campaign=why_cant_we_log_off_the_silicon_valley_glue_thats_got_you_stuck&utm_term=2021-01-18"> internet
                                minute </a> in August of 2020, users around the world uploaded 347,222 Instagram stories and
                                shared 150,000 Facebook messages. That’s a whole lot of <a
                                href="https://www.washingtonpost.com/technology/2020/08/15/instagram-race-activism-slideshow-graphics/?utm_source=newsletter&utm_medium=email&utm_campaign=why_cant_we_log_off_the_silicon_valley_glue_thats_got_you_stuck"> infographics </a> and <a
                                href="https://www.theguardian.com/us-news/2020/apr/27/california-beaches-coronavirus-orange-county?utm_source=newsletter&utm_medium=email&utm_campaign=why_cant_we_log_off_the_silicon_valley_glue_thats_got_you_stuck&utm_term=2021-01-18"> pictures
                                of overcrowded beaches. </a> In the same year, with many of us bored in the house, TikTok took
                                over the saturated social media scene.
                                <br/> <br/>
                                This week, the Polici team embarked on a journey to understand why certain platforms, like
                                Instagram and Snapchat, stay afloat, while others, like Vine, <a
                                href="https://money.cnn.com/2017/01/17/technology/vine-shuts-down/index.html?utm_source=newsletter&utm_medium=email&utm_campaign=why_cant_we_log_off_the_silicon_valley_glue_thats_got_you_stuck&utm_term=2021-01-18"> walk
                                the plank.</a> We took a look at what each platform offers, controversy surrounding stolen
                                features, and their unique algorithms.
                                <br/> <br/>
                                So sit back, relax, and enjoy the data. Oh, and while you’re at it, follow us on social
                                media <bf> @policiorg. </bf>
                            </p>
                        </div>
                    </div>
                    <div className="spacer"/>

                </div>
            </div>

        );
    }
}
export default withRouter(NewsletterDemo)