import "./Signup_page.css";
import Netflix_logo from "./Netflix_logo.png"
import { useState } from "react";
import './Media.css';
//import FormX from './Signup_form/FormX';
import { Link} from "react-router-dom";
let count = 1;
let count1 = 1;
let count2 = 1;
let count3 = 1;
let count4 = 1;
let count5 = 1;



function Signup_page() {

    const [open, setvalue] = useState(false)
    const [open1, setvalue1] = useState(false)
    const [open2, setvalue2] = useState(false)
    const [open3, setvalue3] = useState(false)
    const [open4, setvalue4] = useState(false)
    const [open5, setvalue5] = useState(false)

    return (
        <div id="main">
            <div className="back_ground">
                <div id="wrap_up">
                    <div id="nav">
                        <div> <img src={Netflix_logo}></img></div>
                        <div id="btn">
                            <select>
                                <option>English</option>
                                <option>English</option>
                            </select>
                            <Link to={'/sign'}><button type="button" >Sign in</button></Link>
                        </div>
                    </div>
                    <div id="text_cont">
                        <div id="text1">
                            <h2>Unlimited movies, TV shows and more</h2>
                            <h5>Watch anywhere. Cancel anytime.</h5>
                            <p>Ready to watch? Enter your email to create or restart your membership.
                            </p>
                            <div id="text-bottom">
                                <input placeholder="Email address"></input>
                               <Link to={'/main'}> <button>GET STARTED</button></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div id="page2">
                <div id="page2-inner">
                    <div id="page2-text">
                        <h3>
                            Enjoy on your TV
                        </h3>
                        <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <div id="page2-img">
                        <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
                    </div>
                </div>
            </div>

            <div id="page3">
                <div id="page3-inner">
                    <div id="page3-img">
                        <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
                    </div>
                    <div id="page3-text">
                        <h3>Download your shows to watch offline</h3>
                        <p>Save your favourites easily and always have <br /> something to watch.</p>
                    </div>

                </div>
            </div>
            <div id="page4">
                <div id="page4-inner">
                    <div id="page4-text">
                        <h3>Watch everywhere</h3>
                        <p>
                            Stream unlimited movies and TV shows on your<br /> phone, tablet, laptop, and TV.
                        </p>
                    </div>
                    <div id="page4-img">
                        <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" />
                    </div>
                </div>

            </div>

            <div id="page5">
                <div id="page5-inner">
                    <div id="page5-img">
                        <img alt="" src="https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" />
                    </div>
                    <div id="page5-text">
                        <h3>Create profiles for kids</h3>
                        <p>
                            Send children on adventures with their favourite characters in a space made just for them—free with your membership.
                        </p>
                    </div>
                </div>

            </div>

            <div id="page6">
                <div id="page6-inner">
                    <div>
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <div id="page6-container">
                        <div className="top-show">
                            <p>What is Netflix?</p>
                            <svg width="36px" height="36px" onClick={() => {
                                count++;

                                if (count % 2 == 0) {
                                    setvalue(true)
                                }
                                else {
                                    setvalue(false)
                                }
                            }
                            } ><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>

                        </div>
                        {
                            open && (


                                <div className="show"><p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. <br /><br />
                                    You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                                </div>
                            )

                        }

                        <div className="top-show">
                            <p>How much does Netflix cost?</p>
                            <svg width="36" height="36" onClick={() => {
                                count1++;

                                if (count1 % 2 == 0) {
                                    setvalue1(true)
                                }
                                else {
                                    setvalue1(false)
                                }
                            }
                            } ><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>
                        </div>
                        {
                            open1 && (
                                <div className="show">
                                    <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR 5.49 to EUR 17.99 a month. No extra costs, no contracts.</p>
                                </div>
                            )
                        }

                        <div className="top-show">
                            <p>Where can I watch?</p>
                            <svg width="36" height="36" onClick={() => {
                                count2++;
                                if (count2 % 2 == 0) {
                                    setvalue2(true)
                                }
                                else {
                                    setvalue2(false)
                                }
                            }
                            } ><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>

                        </div>
                        {
                            open2 &&
                            (
                                <div className="show">
                                    <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br /><br />

                                        You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                                </div>
                            )
                        }

                        <div className="top-show">
                            <p>How do I cancel?</p>
                            <svg width="36" height="36" onClick={() => {
                                count3++;
                                if (count3 % 2 == 0) {
                                    setvalue3(true)
                                }
                                else {
                                    setvalue3(false)
                                }
                            }
                            } ><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>

                        </div>
                        {
                            open3 &&
                            (
                                <div className="show">
                                    <p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                                </div>
                            )
                        }

                        <div className="top-show">
                            <p>What can I watch on Netflix?</p>
                            <svg width="36" height="36" onClick={() => {
                                count4++;
                                if (count4 % 2 == 0) {
                                    setvalue4(true)
                                }
                                else {
                                    setvalue4(false)
                                }
                            }
                            } ><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>

                        </div>
                        {
                            open4 &&
                            (
                                <div className="show">
                                    <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                                </div>
                            )
                        }

                        <div className="top-show">
                            <p>Is Netflix good for kids?</p>
                            <svg width="36" height="36" onClick={() => {
                                count5++;
                                if (count5 % 2 == 0) {
                                    setvalue5(true)
                                }
                                else {
                                    setvalue5(false)
                                }
                            }
                            } >
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path>
                            </svg>



                        </div>
                        {
                            open5 &&
                            (
                                <div className="show">
                                    <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.<br /><br />

                                        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                                </div>
                            )
                        }



                    </div>
                    <div id="page6-bottom">
                        <div><h5>Ready to watch? Enter your email to create or restart your membership.</h5></div>
                        <div id="page6-bottom-inner">
                            <input type="email" placeholder="E-mail"></input>
                            <button>GET STARTED</button>
                        </div>
                    </div>

                </div>
            </div>

            <div id="footer">
                <div id="footer-heading"><h5>Questions? Call <span>000-800-919-1694</span></h5></div>
               
                    <div id="footer-container">
                       <li> FAQ</li>
                       <li> Help Centre</li>
                       <li> Account</li>
                       <li> Media Centre</li>
                       <li> Investor Relations</li>
                       <li> Jobs</li>
                       <li> Ways to Watch</li>
                       <li> Terms of Use</li>
                       <li> Privacy</li>
                       <li> Cookie Preferences</li>
                       <li> Corporate Information</li>
                       <li> Contact Us</li>
                       <li> Speed Test</li>
                       <li> Legal Notices</li>
                       <li> Only on Netflix</li>
                    </div>
                   
                
                <div id="footer-option">
                   <select>
                    <option>English</option>
                   </select>
                </div>
                <div></div>


            </div>
        </div>
    )

}
export default Signup_page;