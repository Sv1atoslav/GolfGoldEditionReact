import React from 'react';
import Header from "./compoents/header/header";
import Banner from "./compoents/header/banner";
import Navigation from "./compoents/nav/navigation";
import Aside from "./compoents/aside/aside";
import Slider from "./compoents/slider/slider";
import Main from "./compoents/main/main";
import Footer from "./compoents/footer/footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Navigation/>
      <Aside/>
      <Slider/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
