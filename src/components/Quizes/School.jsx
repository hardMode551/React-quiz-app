import { useQuery } from '@apollo/client';
import React from 'react';
import { useSelector } from 'react-redux';
import { SCHOOL_QUIZ } from '../../apollo/quizes';
import Game from '../Game';
import Result from '../Result';
import Spinner from '../Spinner/Spinner';

const School = () => {
  const { step, correct } = useSelector((state) => state.questions);

  const { loading, error, data } = useQuery(SCHOOL_QUIZ);

  if (loading) return <Spinner />;

  if (error) return <h2>Error: {error.message}</h2>;

  const schoolQuestion = data.allSchoolQuestions[step];
  const totalLength = data.allSchoolQuestions.length;

  return (
    <>
      {step !== totalLength ? (
        <Game step={step} question={schoolQuestion} totalLength={totalLength} />
      ) : (
        <Result question={data.allSchoolQuestions} correct={correct} />
      )}
    </>
  );
};

export default School;
