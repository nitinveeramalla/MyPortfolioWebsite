import React from 'react';
import Fade from 'react-reveal/Fade';
import {Parallax} from 'react-parallax';
import Container from 'react-bootstrap/Container';
//components
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousel from './components/my-carousel/my-carousel.component';
import TitleMessage from './components/title-message/title-message.component';
import About from './pages/about/about.component';

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
    </div>
  );
}

export default App;
