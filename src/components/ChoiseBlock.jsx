import React from 'react';
import { Link } from 'react-router-dom';

import '../scss/_ChoiseBlock.scss';

const ChoiseBlock = () => {
  return (
    <div className="choiseBlock">
      <h1>Выберите интересующий вас тест</h1>
      <Link to="/school-quiz">
        <button>Общешкольные вопросы</button>
      </Link>
      <Link to="/eng-quiz">
        <button>Вопросы по английскому языку</button>
      </Link>
      <Link to="/geography-Quiz">
        <button>Вопросы по географии</button>
      </Link>
    </div>
  );
};

export default ChoiseBlock;
