import Underline from '../underline/underline';

import './title-page.sass';

const TitlePage = () => {
  return (
    <section className='title-page'>
      <div className="title-wrapper">
        <h1 className="title-text">
          Everything You Love About Coffee
        </h1>
        <Underline
          fill={'#FFFFFF'}/>
        <h2 className="title-subtitle">We make every day full of energy and taste</h2>
        <h2 className="title-subtitle">Want to try our beans?</h2>
        <button className='btn'>More</button>
      </div>
    </section>
  )
}

export default TitlePage;