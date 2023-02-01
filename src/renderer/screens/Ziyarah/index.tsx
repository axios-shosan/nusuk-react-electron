import { useState } from 'react';
import aboutImg from 'Images/umrah/About.png';
import style from './style.module.css';

import data from './data';

const Ziyarah = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleButtonClick = (id) => {
    setCurrentCard(id);
  };
  return (
    <div className={style.container}>
      {data.map(({ title, text, image }, id) => (
        <div className={style.card}>
          <button
            onClick={() => handleButtonClick(id)}
            className={`${style.button} ${
              id === currentCard ? style.active : ''
            }`}
          >
            <img src={image} alt={title} />
            <p>{title}</p>
          </button>
          {id === currentCard && (
            <>
              <img src={aboutImg} alt="" className={style.icon} />
              {text.map((p) => (
                <p>{p}</p>
              ))}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Ziyarah;
