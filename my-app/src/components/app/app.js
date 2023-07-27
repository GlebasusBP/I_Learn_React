import AppHeader from "../appHeader/appHeader";
import RandomChar from "../randomChar/randomChar";
import CharList from "../charList/charList";

const App = () => {
  return (
    <div className="app">
      <AppHeader/>
      <main className="main">
        <RandomChar/>
        <section className="char__content">
          <CharList/>
        </section>
      </main>
    </div>
  )
}

export default App;