// import logo from '../../images/coffee-logo.svg';
import Logo from './logo';


import './navigation.sass';

const Navigation = (props) => {

  const color = props.color;

  const linksData = [
    {name:'Coffee house', link: '#'},
    {name:'Our coffee', link: '#'},
    {name:'For your pleasure', link: '#'},
  ];

  const links = linksData.map(({name, link}) => {
    return (
      <li 
        className='header-links-item'
        key={name}>
        <a
          href={link}
          className='nav-link'
          style={{color: color}}
          >
            {name}
          </a>
      </li>
    )
  });

  return (
   <>
      <Logo
        fill={color}/>
      <ul className='header-links'>
        {links}
      </ul>
   </>
  )
}

export default Navigation;