import React from 'react';
import { useSelector } from 'react-redux';

import '../scss/_Result.scss';

const Result = ({ question }) => {
  const { correct } = useSelector((state) => state.questions);

  return (
    <div className="result">
      {correct < 3 ? (
        <>
          <img
            src="https://www.meme-arsenal.com/memes/c2516ad4fd54118d87eb4a221ea4bb26.jpg"
            alt="angry Michael"
          />
        </>
      ) : correct <= 8 ? (
        <>
          <img
            src="https://v1.popcornnews.ru/upload/editor/michael-scott-768x512.jpg"
            alt="hopeless Michael"
          />
        </>
      ) : (
        <>
          <img
            src="https://img07.rl0.ru/afisha/e1200x630i/daily.afisha.ru/uploads/images/4/59/459c9f756ce6fb0d8a35205883f66a9b.png"
            alt="happy Michael"
          />
        </>
      )}
      <h2>
        Вы ответили правильно на {correct} из {question.length} вопросов
      </h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
};

export default Result;
