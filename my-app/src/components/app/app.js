import AppHeader from "../appHeader/appHeader";
import RandomChar from "../randomChar/randomChar";
import CharList from "../charList/charList";
import CharInfo from "../charInfo/charInfo";

import decoration from '../../sources/images/vision.png';

const App = () => {
  return (
    <div className="app">
      <AppHeader/>
      <main className="main">
        <RandomChar/>
        <section className="char__content">
          <CharList/>
          <CharInfo/>
        </section>
        <img className="bg-decoration" src={decoration} alt="vision"/>
      </main>
    </div>
  )
}

export default App;