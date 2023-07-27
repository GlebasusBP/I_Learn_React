import './charList.sass'
import abyss from '../../sources/images/abyss.jpg';

const CharList = () => {
  return (
    <div className="char__list">
      <ul className="char__grid">
        <li className="char__item">
          <img src={abyss} alt="abyss" />
          <div className="char__name">Abyss</div>
        </li>
        <li className="char__item char__selected">
          <img src={abyss} alt="abyss" />
          <div className="char__name">Abyss</div>
        </li>
        <li className="char__item">
          <img src={abyss} alt="abyss" />
          <div className="char__name">Abyss</div>
        </li>
        <li className="char__item">
          <img src={abyss} alt="abyss" />
          <div className="char__name">Abyss</div>
        </li>
        <li className="char__item">
          <img src={abyss} alt="abyss" />
          <div className="char__name">Abyss</div>
        </li>
        <li className="char__item">
          <img src={abyss} alt="abyss" />
          <div className="char__name">Abyss</div>
        </li>
        <li className="char__item">
          <img src={abyss} alt="abyss" />
          <div className="char__name">Abyss</div>
        </li>
        <li className="char__item">
          <img src={abyss} alt="abyss" />
          <div className="char__name">Abyss</div>
        </li>
        <li className="char__item">
          <img src={abyss} alt="abyss" />
          <div className="char__name">Abyss</div>
        </li>
      </ul>
      <button className="button button__main button__long">
        <div className="inner">LOAD MORE</div>
      </button>
    </div>
  )
}

export default CharList;