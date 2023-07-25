import { Component } from "react";

import Header from "../header/header";
import TitlePage from "../title-page/title-page";
import About from "../about/about";
import OurBest from "../our-best/our-best";
import Footer from "../footer/footer";

class App extends Component {

  render(){
    return (
      <>
        <Header/>
        <main className='main'>
          <TitlePage/>
          <About/>
          <OurBest/>
        </main>
        <Footer/>
      </>
    );
  }
}

export default App;