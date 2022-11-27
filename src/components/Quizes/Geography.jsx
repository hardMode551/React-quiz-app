import { useQuery } from '@apollo/client';
import React from 'react';
import { useSelector } from 'react-redux';
import { GEOGRAPHY_QUIZ } from '../../apollo/quizes';
import Game from '../Game';
import Result from '../Result';
import Spinner from '../Spinner/Spinner';

const Geography = () => {
  const { step, correct } = useSelector((state) => state.questions);

  const { loading, error, data } = useQuery(GEOGRAPHY_QUIZ);

  if (loading) return <Spinner />;

  if (error) return <h2>Error: {error.message}</h2>;

  const geographyQuestion = data.allGeographyQuestions[step];
  const totalLength = data.allGeographyQuestions.length;

  return (
    <>
      {step < totalLength ? (
        <Game step={step} question={geographyQuestion} totalLength={totalLength} />
      ) : (
        <Result question={data.allGeographyQuestions} correct={correct} />
      )}
    </>
  );
};

export default Geography;
