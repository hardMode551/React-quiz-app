import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCorrect, setStep } from '../Redux/slices/questionsSlice';
import '../scss/_Game.scss';

const Game = ({ question, totalLength }) => {
  const { step, correct } = useSelector((state) => state.questions);

  const percentage = Math.round((step / totalLength) * 100);
  const dispatch = useDispatch();

  const onClickVariant = (index) => {
    dispatch(setStep(step + 1));
    if (index === question.correct) {
      dispatch(setCorrect(correct + 1));
    }
  };

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={index}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Game;
