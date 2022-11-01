import React from 'react';
import { questions } from '../App';
import '../scss/_Result.scss';

const Result = ({ correct }) => {
  return (
    <div className="result">
      {correct < 3 ? (
        <>
          <img
            src="https://www.meme-arsenal.com/memes/c2516ad4fd54118d87eb4a221ea4bb26.jpg"
            alt="angry Michael"
          />
          <p className="result__description">
            Вы ничего не помните из школьной программы :( , но ничего страшного, никогда не поздно
            наверстать свои знания :)
          </p>
        </>
      ) : correct <= 8 ? (
        <>
          <img
            src="https://v1.popcornnews.ru/upload/editor/michael-scott-768x512.jpg"
            alt="hopeless Michael"
          />
          <p className="result__description">Вы что-то помните со школы, но не всё</p>
        </>
      ) : (
        <>
          <img
            src="https://img07.rl0.ru/afisha/e1200x630i/daily.afisha.ru/uploads/images/4/59/459c9f756ce6fb0d8a35205883f66a9b.png"
            alt="happy Michael"
          />
          <p className="result__description">
            Хороший результат! Судя по всему в школе вы были "хорошистом" или "отличником"
          </p>
        </>
      )}
      <h2>
        Вы ответили правильно на {correct} из {questions.length} вопросов
      </h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
};

export default Result;
