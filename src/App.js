import React from 'react';
import Header from "./compoents/header";
import Banner from "./compoents/banner";
import Navigation from "./compoents/navigation";
import Aside from "./compoents/aside";
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
