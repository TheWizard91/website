import React from "react";
// import 'semantic-ui-css/semantic.min.css'  
import { Card, Icon, Image } from 'semantic-ui-react'

function Interests () {
    return (
        <div id="mainContainer" >
            <main class="main_contanier">
                <div class="fix_block" id="fix_interests">
                    <h1>Interests</h1>
                    <p class="meduim_size_font">When I am not working, I like to pick my camera go out, and do some shoot. 
                        I do necessarily consider myself a photographer, but it is a wonderful way to let go of stress and I learn a lot from practicing this activity. 
                        Things that correlate to programming as well, such as becoming more creative. 
                        I find beauty in this world, and I do like capturing it through my lenses. 
                        However, this is not an easy task to do. 
                        In fact, I often need to just come up with some hacks for me to get that “perfect” shot, such as manipulating the light, changing angles, or the setting on my camera, the timing, etc. 
                        Just like in software engineering I must be open-minded when it comes to solving a problem in this case how do I get that shot.
                    </p>
                    <div id="socialNetwork">
                        <ul id="socialNetworkUL">
                            <li><a href="https://www.instagram.com/emmanuelagyapong_/" target="_blank"><Icon name='instagram' size="big" /></a></li>
                            <li><a href="https://www.flickr.com/photos/183785405@N04/" target="_blank"><Icon name='flickr' size="big" /></a></li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Interests;