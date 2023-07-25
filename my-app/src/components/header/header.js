import Navigation from '../navigation/navigation';

import './header.sass';

const Header = () => {

  return (
    <nav className='header'>
      <div className="header-container">
        <Navigation
          color={'#FFFFFF'}/>
      </div>
    </nav>
  )
}

export default Header;