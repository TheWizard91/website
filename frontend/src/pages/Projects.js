import React from "react";
import "/home/emmanuel/Desktop/my_portfolio/frontend/src/style/Projects.css"
import { Card, Icon, Image } from 'semantic-ui-react'

// import IconsDemo from '/home/emmanuel/Desktop/my_portfolio/frontend/src/components/IconsDemo.js';
// import FlagsDemo from '/home/emmanuel/Desktop/my_portfolio/frontend/src/components/FlagsDemo.js';
import "/home/emmanuel/Desktop/my_portfolio/frontend/src/components/Navigation.css"
// import "/home/emmanuel/Desktop/my_portfolio/frontend/src/style/Projects.css"
const logo=require("/home/emmanuel/Desktop/my_portfolio/frontend/src/images/DesignPad.png") 
const logo2=require("/home/emmanuel/Desktop/my_portfolio/frontend/src/images/artificial+intelligence_project_cropped.png") 

function Projects () {
    return (
        <div id="mainContainer">
            <h1 id="projectsHeadings">Projects</h1>
            <main class="main_container">
                {/* <div class="fix_blok" id="fix_projects"> */}
                    {/* <div class="projects_image col sm-col-4 px2 mb2">
                        <img class="border bg-white p1 border-gray circle square-100 lazyload" 
                        id="projectImage"src={logo} style={{width: 200, height: 200, borderRadius: 400/ 2}} />
                    </div>
                    <div class="peoject_description">
                        <h3 class="heading_three"><a href="https://codesandbox.io/s/cmp464homethreethedesignpad-ulnje" target="_blank"> Design Pad</a></h3>
                        <p>We have 8 pads on the lasft contaninig colors on the left.</p>
                        <p>And as you move them the one of the right change color.</p>
                    </div> */}
                    <ProjectCardView2 />
                    <ProjectCardView />
                {/* </div> */}
            </main>
        </div>
    );
}

const ProjectCardView = () => (
    <div id="projectCardContainer" style={{ margin: 20}}>{/*, background: "black"*/}
      <Card id="card">
      <img class="border bg-white p1 border-gray circle square-100 lazyload" 
                        id="projectImage"src={logo} /> {/**style={{width: 500, height: 300, borderRadius: 10}} */}
        <Card.Content id="cardContent">
          <Card.Header id="projectsHeadings"><h3>ProjoectOne</h3></Card.Header>
          <Card.Meta>
            <span className='date'>03-31-2022</span>
          </Card.Meta>
          <Card.Description id="description">
            <p class="meduim_size_font">We have 8 pads contaninig colors on the left. When you pick a pad on the left, and drag it to any pad on the right you change 
                its color according to the pad that you place upon it after draging. 
            </p>
          </Card.Description>
          <Card.Content extra id="code_link">
            <a id="projectLink" href="https://codesandbox.io/s/the-design-pad-ulnje">
                <Icon name='code' size="big" />
            </a>
            {/* </a> */}
        </Card.Content>
        </Card.Content>
      </Card>
    </div>
)
const ProjectCardView2 = () => (
    <div id="projectCardContainer" style={{ margin: 20}}>{/*, background: "black"*/}
      <Card id="card">
      <img class="border bg-white p1 border-gray circle square-100 lazyload" 
                        id="projectImage"src={logo2} /> {/**style={{width: 500, height: 300, borderRadius: 10}} */}
        <Card.Content id="cardContent">
          <Card.Header id="projectsHeadings"><h3>ProjoectOne</h3></Card.Header>
          <Card.Meta>
            <span className='date'>03-31-2022</span>
          </Card.Meta>
          <Card.Description id="description">
            <p class="meduim_size_font">We have 8 pads contaninig colors on the left. When you pick a pad on the left, and drag it to any pad on the right you change 
                its color according to the pad that you place upon it after draging. 
            </p>
          </Card.Description>
          <Card.Content extra id="code_link">
            <a id="projectLink" href="https://codesandbox.io/s/the-design-pad-ulnje">
                <Icon name='code' size="big" />
            </a>
            {/* </a> */}
        </Card.Content>
        </Card.Content>
      </Card>
    </div>
) 
  
export default Projects;
// Projects.js
