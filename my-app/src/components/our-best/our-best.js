import './our-best.sass';

import coffee_1 from '../../images/coffee/1.png';
import coffee_2 from '../../images/coffee/2.png';
import coffee_3 from '../../images/coffee/3.png';

const OurBest = () => {

  const bestCoffeeList = [
    {name:'Solimo Coffee Beans 2 kg', price:'10.73$', image: coffee_1},
    {name:'Presto Coffee Beans 1 kg', price:'15.99$', image: coffee_2},
    {name:'AROMISTICO Coffee 1 kg', price:'6.99$', image: coffee_3},
  ];

  const bestCoffeeItem = bestCoffeeList.map(({name, price, image}) => {
    return (
      <li className='best-coffee-item'>
        <img className='best-coffee-img' src= {image} alt={name}/>
        <h3 className="title-item">{name}</h3>
        <span className='item-price'>{price}</span>
      </li>
    )
  });

  return (
    <section className='best'>
      <div className="best-wrapper">
        <h2 className="title">
          Our Best
        </h2>
        <ul className='best-coffee-list'>
          {bestCoffeeItem}
        </ul>
      </div>
    </section>
  )
}

export default OurBest;