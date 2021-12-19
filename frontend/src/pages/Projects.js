import React from "react";
// import "/home/emmanuel/Desktop/my_portfolio/frontend/src/style/Projects.css"
import "/home/emmanuel/Desktop/my_portfolio/frontend/src/components/Navigation.css"
const logo=require("/home/emmanuel/Desktop/my_portfolio/frontend/src/images/DesignPad.png") 

function Projects () {
    return (
        <div id="mainContainer">
            <h1 id="projectsHeadings">Projects</h1>
            <main class="main_container">
                <div class="fix_blok" id="fix_projects">
                    <div class="projects_image col sm-col-4 px2 mb2">
                        <img class="border bg-white p1 border-gray circle square-100 lazyload" 
                        id="projectImage"src={logo} style={{width: 200, height: 200, borderRadius: 400/ 2}} />
                    </div>
                    <div class="peoject_description">
                        <h3 class="heading_three"><a href="https://codesandbox.io/s/cmp464homethreethedesignpad-ulnje" target="_blank"> Design Pad</a></h3>
                        <p>We have 8 pads on the lasft contaninig colors on the left.</p>
                        <p>And as you move them the one of the right change color.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default Projects;
// Projects.js
