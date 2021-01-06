import React from 'react';
import Fade from 'react-reveal/Fade';
import {Parallax} from 'react-parallax';
import Container from 'react-bootstrap/Container';
import Slide from "react-reveal/Slide";
//components
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousel from './components/my-carousel/my-carousel.component';
import TitleMessage from './components/title-message/title-message.component';
import About from './pages/about/about.component';
import Skills from './pages/skills/skills.component'

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
        <MyCarousel />
        <TitleMessage />
        <MyNavbar />
        
        {/* About section */}
        <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.jpg")}
          bgImageAlt=""
          strength={-200}
        >
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
        </Parallax>
        </div>

        {/* Skills Section */}
        
        <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
    </div>
  );
}

export default App;
