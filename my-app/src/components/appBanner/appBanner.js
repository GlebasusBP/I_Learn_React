import './appBanner.sass';
import avengers from '../../sources/images/Avengers.png';
import avengersLogo from '../../sources/images/Avengers_logo.png';

const AppBaner = () => {
  return (
    <div className="app__banner">
      <img src={avengers} alt="Avengers"/>
        <div className="app__banner-text">
          New comics every week!<br/>
          Stay tuned!
        </div>
      <img src={avengersLogo} alt="Avengers logo"/>
    </div>
  )
}

export default AppBaner;