import React from 'react';
import { useSelector } from 'react-redux';
import Game from './Game';
import Result from './Result';

export const engQuestions = [
  {
    id: 0,
    title: 'Как переводится фраза - "Pay taxes and sleep well"',
    variants: [
      'Заплати и покойся с миром',
      'Поиграй с таксой и хорошо выспись',
      'Заплати налоги и спи спокойно',
      'Не знаю',
    ],
    correct: 2,
  },
  {
    id: 1,
    title: 'Переведите фразу на английский - "Ну, никто не совершенен!"',
    variants: ["Well, nobody's perfect", 'Well, nobody are perfect', 'Well, lets drink', 'Не знаю'],
    correct: 0,
  },
  {
    id: 2,
    title: 'Как переводится фраза - "The mayor\'s son wanted to become a pilot"',
    variants: [
      'Сын майора хочет стать лётчиком',
      'Сын главы города хотел стать лётчиком',
      'Сын майора хотел стать самостоятельным',
      'Не знаю',
    ],
    correct: 1,
  },
  {
    id: 3,
    title:
      'Переведите фразу на английский - "Я сделаю ему предложение, от которого он не сможет отказаться"',
    variants: [
      "I'm will do him an offer he can't refuse",
      "I'm gonna ask him an offer he don't refuse",
      "I'm gonna make him an offer he can't refuse",
      'Не знаю',
    ],
    correct: 2,
  },
  {
    id: 4,
    title: 'Вставьте правильную конструкцию в выражение  - "___ you play tennis yesterday?"',
    variants: ['Doing', 'Did', 'Do', 'Не знаю'],
    correct: 1,
  },
  {
    id: 5,
    title: 'Корректно ответьте на вопрос  - "Do you like reading books?"',
    variants: ['Yes, I read', 'Yes, I do', 'Yes, I like.', 'Не знаю'],
    correct: 1,
  },
  {
    id: 6,
    title: 'Что такое "a shooting star"?',
    variants: ['Падающая звезда', 'Стреляющая звезда', 'Горящая звезда', 'Не знаю'],
    correct: 0,
  },
  {
    id: 7,
    title: 'Вставьте правильную конструкцию в выражение  - "Women ____ flowers"',
    variants: ['liking', 'likes', 'like', 'Не знаю'],
    correct: 2,
  },
  {
    id: 8,
    title: 'Есть ли в выражении ошибка "I has a bucket"?',
    variants: ['Да', 'Нет', 'Не знаю'],
    correct: 0,
  },
  {
    id: 9,
    title: 'Как на английском будет "Да"',
    variants: ['Dog', 'Cat', 'Yes', 'No', 'Не знаю'],
    correct: 2,
  },
];

const EngQuiz = () => {
  const { step, correct } = useSelector((state) => state.questions);
  const engQuestion = engQuestions[step];
  const totalLength = engQuestions.length;

  return (
    <>
      {step !== engQuestions.length ? (
        <Game step={step} question={engQuestion} totalLength={totalLength} />
      ) : (
        <Result question={engQuestions} correct={correct} />
      )}
    </>
  );
};

export default EngQuiz;
