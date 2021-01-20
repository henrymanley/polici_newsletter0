import React from 'react';
import DemoTheme from '../Demo.css';
import Banner from '../assets/banner.png';
import Graph1 from '../assets/graph1.png';
import Graph2 from '../assets/graph2.png';
import Graph3 from '../assets/graph3.png';
import Graph4 from '../assets/graph4.png';
import Graph5 from '../assets/graph5.png';
import Graph6 from '../assets/graph6.png';
import Header from "./Header";
import Submit from "./Submit";
import {withRouter} from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css';
import Footer from "./Footer";

AOS.init();


class NewsletterDemo extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div theme={DemoTheme} data-aos="fade-up">

                    <div style={{color: 'white', margin: 'auto', width:'85%', maxWidth:'650px'}} >
                        <div className="bigspacer"/>
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

                            <h2 className="newsl" >Good Morning</h2>
                            <hr />

                            <div className="roundbottom">
                                <p className="newslp">
                                    When you wake up in the morning, what’s the first thing you do besides aggressively shutting off
                                    your alarm? We’d guess probably checking your phone. More specifically, scrolling through
                                    Facebook meme pages as if it was the newspaper or leaving your ex’s DM on seen for the third
                                    time this week (they don’t seem to go away, do they?).
                                    <br/> <br/>
                                    In just one <a className ="newsletter-demo"
                                                   href="https://www.statista.com/statistics/195140/new-user-generated-content-uploaded-by-users-per-minute/?utm_source=newsletter&utm_medium=email&utm_campaign=why_cant_we_log_off_the_silicon_valley_glue_thats_got_you_stuck&utm_term=2021-01-18"> internet
                                    minute </a> in August of 2020, users around the world uploaded 347,222 Instagram stories and
                                    shared 150,000 Facebook messages. That’s a whole lot of <a className ="newsletter-demo"
                                                                                               href="https://www.washingtonpost.com/technology/2020/08/15/instagram-race-activism-slideshow-graphics/?utm_source=newsletter&utm_medium=email&utm_campaign=why_cant_we_log_off_the_silicon_valley_glue_thats_got_you_stuck"> infographics </a> and <a className ="newsletter-demo"
                                                                                                                                                                                                                                                                                                                                                     href="https://www.theguardian.com/us-news/2020/apr/27/california-beaches-coronavirus-orange-county?utm_source=newsletter&utm_medium=email&utm_campaign=why_cant_we_log_off_the_silicon_valley_glue_thats_got_you_stuck&utm_term=2021-01-18"> pictures
                                    of overcrowded beaches. </a> In the same year, with many of us bored in the house, TikTok took
                                    over the saturated social media scene.
                                    <br/> <br/>
                                    This week, the Polici team embarked on a journey to understand why certain platforms, like
                                    Instagram and Snapchat, stay afloat, while others, like Vine, <a className ="newsletter-demo"
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

                                    From behind all of our screens, it’s hard to physically imagine the millions of
                                    others that we share the digital space with, and it’s difficult to truly gauge how
                                    popular certain platforms are. We did that math, and it turns out that
                                    Charli D’Amelio’s (a 16 year old TikTok star) 101 million followers would fill
                                    Yankee Stadium 1,861 times. Even crazier, we found that, if counted as a population,
                                    National Geographic's 28.5 million-person Twitter following would become the third
                                    argest state.
                                    <br /> <br />

                                    Yet, while Twitter and Facebook remain hot button topics in the news cycle,
                                    their user growth actually seems to be slowing down. Meanwhile, TikTok’s soaring
                                    popularity might parallel Vine's short-lived hype, but its infamous algorithm and
                                    unique for-you-page might help it stand the test of time.
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


                                    Despite strong user preferences for some social media platforms over others,
                                    the giants actually share a substantial number of the same features.
                                    While TikTok stands alone in providing in-depth video editing and only
                                    Twitter and Facebook provide full desktop accessibility, all of the major
                                    platforms considered above offer a news/trending feed and personal messaging.
                                    So before asserting that your dad would never get a TikTok, consider that
                                    he’s experienced in much of what TikTok has to offer through his seemingly
                                    age-old Facebook account. Although maybe it is time to delete those
                                    cringy 2009 vacation pictures...
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

                                    This jockeying for ideas and features has real implications.
                                    Snapchat stole the stage when first launched in 2011, reaching a
                                    share rate of 20 million images per day in just a year's time.
                                    Snapchat introduced many new features to the social media stage
                                    from Geo-filters to “Snapstreaks” to personalized QR codes to
                                    add friends. When they first came out in late 2013, Stories were
                                    a monumental driver of growth for Snapchat. In 2016, Facebook and
                                    Instagram launched their own versions, both of which contributed
                                    to Snapchat's slowing growth (an 82% decrease!). This averaging out
                                    of features across platforms has major consequences for platforms'
                                    growth and overall success. Kylie Jenner (who came to fame on
                                    Snapchat and represents its core user base) has been credited
                                    for shaving $1.8 billion off Snap’s value with a single Tweet.
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


                                    There’s no denying that more and more of us have been using social
                                    media these days (just check your screen time last week), yet user
                                    time isn’t the only metric by which social media corporations have grown.
                                    In fact, the largest social media companies have grown to be the behemoths
                                    they are through the acquisition of potential competitors. Facebook is
                                    a prime example through its acquisition of Instagram in 2012. From
                                    introducing features such as reels to compete with other apps to
                                    beefing up app-based advertising through an algorithm-based feed
                                    and in-app shopping, Facebook’s acquisition of Instagram has
                                    heavily shaped the Instagram many of us know and love (to hate).
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
                            <div className="roundbottom" style={{marginBottom:'50px'}}>
                                <p className="newslp">

                                    Let’s take a look at algorithms. Algorithms are essentially instructions
                                    a computer is given to complete a task. In the case of social media,
                                    this task is promoting relevant content to users. A social media
                                    algorithm is at the heart of what maintains an app’s popularity,
                                    and inevitably what causes us to keep scrolling, as displaying
                                    content you will like and engage with drives a better experience
                                    and more users to the platform. These algorithms analyze your
                                    personal data, including your interests and engagement, to provide
                                    you with content you enjoy, “learning” from what posts you comment
                                    on, how often you are on the app, and what things you never like.
                                    < br /> < br />
                                    Platforms, like YouTube, remain controversial because their algorithm
                                    promotes less personal content and censors a lot of popular media.
                                    Others, like TikTok, allow for easy growth in followers and tailor
                                    almost eerily well to personal interests, making them seemingly
                                    more addictive than other platforms. In order to maintain its
                                    growing popularity, TikTok refuses to divulge the secret of its
                                    algorithm. We guess a good magician never reveals their tricks?
                                </p>
                            </div>
                        </div>
                        <div className="spacer"/>
                        <hr />
                        <Submit />
                        <div className="spacer"/>
                        <hr />
                        <div className="bigspacer"/>
                    </div>
                </div>
                <Footer />
            </div>


        );
    }
}
export default withRouter(NewsletterDemo)