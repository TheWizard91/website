import React from "react";
import "/home/emmanuel/Desktop/my_portfolio/frontend/src/style/Projects.css"
import { Card, Icon, Image } from 'semantic-ui-react'

// import IconsDemo from '/home/emmanuel/Desktop/my_portfolio/frontend/src/components/IconsDemo.js';
// import FlagsDemo from '/home/emmanuel/Desktop/my_portfolio/frontend/src/components/FlagsDemo.js';
import "/home/emmanuel/Desktop/my_portfolio/frontend/src/components/Navigation.css"
// import "/home/emmanuel/Desktop/my_portfolio/frontend/src/style/Projects.css"
const logo=require("/home/emmanuel/Desktop/my_portfolio/frontend/src/images/DesignPad.png") 
const logo3=require("/home/emmanuel/Desktop/my_portfolio/frontend/src/images/artificial+intelligence_project_cropped.png") 
const logo2=require("/home/emmanuel/Desktop/my_portfolio/frontend/src/images/mm6915e3_HospitalizationsCOVID19_IMAGE_08April20_1200x627.jpg")
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
                    <ProjectCardView3 />
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
          <Card.Header id="projectsHeadings"><h3>DesignPad Project</h3></Card.Header>
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
const ProjectCardView3 = () => (
    <div id="projectCardContainer" style={{ margin: 20}}>{/*, background: "black"*/}
      <Card id="card">
      <img class="border bg-white p1 border-gray circle square-100 lazyload" 
                        id="projectImage"src={logo3} /> {/**style={{width: 500, height: 300, borderRadius: 10}} */}
        <Card.Content id="cardContent">
          <Card.Header id="projectsHeadings"><h3>Telco-Chum AI Project</h3></Card.Header>
          <Card.Meta>
            <span className='date'>03-31-2022</span>
          </Card.Meta>
          <Card.Description id="description">
            <p class="meduim_size_font">
              Thoroughly analyzed data from <a id="here_link" href="http://jse.amstat.org/v19n3/decock/DataDocumentation.txt">here</a> and found the mean, median, variance, and standard deviation using Python.
              In addition to that, I made predictions, built models, and tested them for the dataset at hand. 
              So started analyzing the data by checking the data type of each input variable is right, and if not, correct them. 
              Then, I checked for any missing values, meaning getting rid of the empty spaces (the NaN values). 
              After cleaning the data, I made graphs to gain more insight. 
              Finally, I used the one-hot-encoding to improve the prediction and classification of my analysis, split and tested the data to get more understanding and started training them for the models. 
              These are the models used in this project: Logistic project Regression, Support Vector Machine, K Nearest Neighbors, Decision Trees, Random Forests. 
              And finally, choose the best model by analyzing the accuracy, precision, recall, and F-1 score. 
              However, the goal of this project was to find out which types of customers are less likely to end the service?
            </p>
          </Card.Description>
          <Card.Content extra id="code_link">
            <a id="projectLink" href="https://github.com/TheWizard91/Artificial-intelligence-Project/blob/main/Artificial_Intelligence_Project.ipynb">
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
        <Card.Header id="projectsHeadings"><h3>COVID-19 World Vaccination Progress Project</h3></Card.Header>
        <Card.Meta>
          <span className='date'>03-31-2022</span>
        </Card.Meta>
        <Card.Description id="description">
          <p class="meduim_size_font">
          Analyzed data from <a id="here_link" href="https://www.kaggle.com/datasets/sagarsahni3/covid19-world-vaccination-progress">Kaggle</a> and found the mean, median, variance, and standard deviation (analyzed it) using R. 
          Project in website version can be found in <a id="here_link" href="https://sites.google.com/view/finalprojectofmath327/home">here</a> while the documentation is in <a id="here_link" href="https://app.luminpdf.com/viewer/626011687e7bf7da8a5af1aa">here</a>.
          </p>
        </Card.Description>
        <Card.Content extra id="code_link">
          <a id="projectLink" href="https://github.com/TheWizard91/Statistical-Inference-Project">
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
