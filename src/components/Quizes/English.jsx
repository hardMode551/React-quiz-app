import { useQuery } from '@apollo/client';
import React from 'react';
import { useSelector } from 'react-redux';
import { ENG_QUIZ } from '../../apollo/quizes';
import Game from '../Game';
import Result from '../Result';
import Spinner from '../Spinner/Spinner';

const English = () => {
  const { step, correct } = useSelector((state) => state.questions);

  const { loading, error, data } = useQuery(ENG_QUIZ);

  if (loading) return <Spinner />;

  if (error) return <h2>Error: {error.message}</h2>;

  const engQuestion = data.allEngQuestions[step];
  const totalLength = data.allEngQuestions.length;

  return (
    <>
      {step !== totalLength ? (
        <Game step={step} question={engQuestion} totalLength={totalLength} />
      ) : (
        <Result question={data.allEngQuestions} correct={correct} />
      )}
    </>
  );
};

export default English;
