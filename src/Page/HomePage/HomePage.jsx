import React, { useState } from "react";
import QandA from "../../Component/QandA/QandA";
import Questions from "../../Component/QandA/Questions";
import "./HomePage.css"

function HomePage() {
    const [showAnswer, setShowAnswer] = useState(false);
    return (

        <div className="homePage">

            <div className='homePage-Header'>
                <img className='homePage-Header-Logo' src={require('../../Components/images/Logonetflix.png')} alt="Netflix Logo" />
                <button className='homePage-Header-Signin'>Sign In</button>
            </div>

            <div className="homePage-banner">
                <div className='homePage-bannerCover'>
                    <div className="homePage-bannerContent">
                        <h1>Unlimited movies, TV <br />shows and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <form className="homePage-bannerBox">
                            <input required className='homePage-bannerEmail' type="email" placeholder='Email address' />
                            <button type='submit' className='homePage-bannerButton'>
                                Get Started
                                <i className="bannerButtonArrow fa-solid fa-angle-right"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <hr />

            <div className="homePage-card">
                <div className="homePage-cardTextbox">
                    <h1>Enjoy on your TV.</h1>
                    <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
                </div>
                <div className="homePage-cardImagebox">
                    <div className="homePage-cardScreen">
                        <img className="homePage-cardTVScreenVideo" src={require('../../Components/videos/video-tv.gif')} />
                    </div>
                    <img className='homePage-cardTV' src={require('../../Components/images/tv.png')} alt='' />
                </div>
            </div>
            <hr />

            <div className="homePage-card">
                <div className="homePage-cardImagebox">
                    <img src={require('../../Components/images/mobile.jpg')} alt="" />
                </div>
                <div className="homePage-cardTextbox">
                    <h1>Download your shows to watch offline.</h1>
                    <h2>Save your favourites easily and always have something to watch.</h2>
                </div>
            </div>
            <hr />

            <div className="homePage-card">
                <div className="homePage-cardTextbox">
                    <h1>Watch everywhere.</h1>
                    <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
                </div>
                <div className="homePage-cardImagebox">
                    <div className="homePage-cardScreen">
                        <img className='homePage-cardScreenVideo' src={require('../../Components/videos/video-computer.gif')}/>
                    </div>
                    <img className='homePage-cardTV' src={require('../../Components/images/computer.png')} alt='' />
                </div>
            </div>
            <hr />

            <div className="homePage-card">
                <div className="homePage-cardImagebox">
                    <img src={require('../../Components/images/children.jpg')} alt="" />
                </div>
                <div className="homePage-cardTextbox">
                    <h1>Create profiles for children.</h1>
                    <h2>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h2>
                </div>
            </div>
            <hr />

            <div className="FAQs">
                {
                    Questions.map((qAnda, index) => {
                        return (
                            <QandA setShowAnswer={setShowAnswer} showAnswer={showAnswer} qAnda={qAnda} key={index} />
                        )
                    })
                }
            </div>
            <hr />

            <div className="footer">
                <div className="footcontainer">
                    <h3>Questions? Call 000-000-000-0000 </h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>FAQ</td>
                                <td>Help Centre</td>
                                <td>Account</td>
                                <td>Media Centre</td>
                            </tr>
                            <tr>
                                <td>Investor Relations</td>
                                <td>Jobs</td>
                                <td>Ways to Watch</td>
                                <td>Terms of Use</td>
                            </tr>
                            <tr>
                                <td>Privacy</td>
                                <td>Cookie Preferences</td>
                                <td>Corporate Information</td>
                                <td>Contact Us</td>
                            </tr>
                            <tr>
                                <td>Speed Test</td>
                                <td>Legal Notices</td>
                                <td>Only on</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Movies</p>
                </div>
            </div>

        </div>


    )
}

export default HomePage;
