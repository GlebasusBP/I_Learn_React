import AppHeader from "../appHeader/appHeader";
import RandomChar from "../randomChar/randomChar";

const App = () => {
  return (
    <div className="app">
      <AppHeader/>
      <main className="main">
        <RandomChar/>
      </main>
    </div>
  )
}

export default App;