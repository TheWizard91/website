import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css'
const logo=require("/home/emmanuel/Desktop/my_portfolio/frontend/src/images/IMG_9342.JPG") 
function Home () {
    return (
        <div calss="main_container" id="mainContainer">
            <div class="container" id="home">
                <img class="border bg-white p1 border-gray circle square-100 lazyload" id="myImage"src={logo} style={{width: 150, height: 150, borderRadius: 400/ 2}} />
                <h1 class="page-title mt0 mb1">Emmanuel Kofi Agyapong</h1>
                <h2 class="heading_two">Student at <a href="https://www.credly.com/badges/3a3dfcd6-ea00-4ee3-9403-c3f4ea3f9594" target="_blank"> 
                        Lehman H. College(CUNY).
                    </a>
                </h2>
                <main class="container_of_main">
                    <div class="fix_block">
                        <div class="thirty_seconds_pitch">
                            <h3 id="aboutMe">About Me</h3>
                            <p class="meduim_size_font">Hello, I am Emmanuel Kofi Agyapong, a pleasure to meet you! 
                                I am very passionate about web development, mobile development, and testing development. 
                                I have many side projects in my GitHub repositories in addition to school projects.
                            </p>
                            <p class="meduim_size_font"> 
                                By the way, I will be graduating in Spring 2022 at Lehman H. College of CUNY with a 3.69 GPA. 
                                Here are some of the front-end and back-end technologies that I am proficient with:
                                For future opportunities, please feel free to contact me.
                            </p>
                        </div>
                        <div class="social_network">
                            <h3 id="contact">Contact</h3>
                            <ul class="contact_list">
                                <li><a href="https://www.linkedin.com/in/emmanuel-kofi-agyapong-783807bb/" target="_blank"><Icon name='linkedin' size="big" /></a></li>
                                <li><a href="https://www.facebook.com/emmanuel.agyapong.376" target="_blank"><Icon name='facebook' size="big" /></a></li>
                                <li><a href="https://github.com/TheWizard91" target="_blank"><Icon name='github' size="big" /></a></li>
                                <li><a href="https://twitter.com/agiapong" target="_blank"><Icon name='twitter' size="big" /></a></li>
                                {/* <li><a href="https://www.instagram.com/emmanuelagyapong_/" target="_blank">Instagram</a></li>
                                <li><a href="https://www.flickr.com/photos/183785405@N04/" target="_blank">Flirk</a></li> */}
                                <li><a href="https://codesandbox.io/dashboard/home?workspace=b5040796-7ad1-413f-a834-21d637e88ff5" target="_blank"><Icon name='code' size="big" /></a></li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
export default Home;
// Home.js
