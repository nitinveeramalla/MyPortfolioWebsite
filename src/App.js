import React from 'react';

//components
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousel from './components/my-carousel/my-carousel.component';
import TitleMessage from './components/title-message/title-message.component';

const App = () => {
  return (
    <div>
        <MyNavbar />
        <MyCarousel />
        <TitleMessage />
    </div>
  );
}

export default App;
