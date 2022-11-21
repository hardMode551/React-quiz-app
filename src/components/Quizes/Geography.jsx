import React from 'react';
import { useSelector } from 'react-redux';
import Game from '../Game';
import Result from '../Result';

const geographyQuestions = [
  {
    id: 0,
    title: 'Как называется самый известный водопад в Канаде?',
    variants: ['Виктория', 'Ниагарский', 'Анхель', 'Не знаю'],
    correct: 1,
  },
  {
    id: 1,
    title: 'Самое маленькое государство в Европе',
    variants: ['Ватикан', 'Андорра', 'Лихтенштейн', 'Не знаю'],
    correct: 0,
  },
  {
    id: 2,
    title: 'В каком океане находится знаменитая Марианская впадина?',
    variants: ['В Индийском океане', 'В Тихом океане', 'В Атлантическом океане', 'Не знаю'],
    correct: 1,
  },
  {
    id: 3,
    title: 'Какие континенты разделяет Панамский канал?',
    variants: [
      'Северную и Южную Америку',
      'Евразию и Северную Америку',
      'Евразию и Африку',
      'Не знаю',
    ],
    correct: 0,
  },
  {
    id: 4,
    title:
      'Христофор Колумб открыл Америку, хотя на самом деле его целью была совсем другая страна. Какая?',
    variants: ['Мексика', 'Китай', 'Индия', 'Не знаю'],
    correct: 2,
  },
  {
    id: 5,
    title: 'Назовите государство, которое граничит с Норвегией.',
    variants: ['Швеция', 'Австрия', 'Ирландия', 'Не знаю'],
    correct: 0,
  },
  {
    id: 6,
    title: 'Что такое муссон?',
    variants: ['Тропический дождь', 'Ветер', 'Течение', 'Не знаю'],
    correct: 1,
  },
  {
    id: 7,
    title: 'Как называется нижний слой атмосферы, в котором мы живём?',
    variants: ['Тропосфера', 'Стратосфера', 'Мезосфера', 'Не знаю'],
    correct: 0,
  },
  {
    id: 8,
    title: 'Какой континент имеет самую маленькую площадь?',
    variants: ['Южная Америка', 'Антарктида', 'Австралия', 'Не знаю'],
    correct: 2,
  },
  {
    id: 9,
    title: 'Какое море омывает берега Италии?',
    variants: ['Красное', 'Средиземное', 'В Тихом океане', 'Не знаю'],
    correct: 1,
  },
];

const Geography = () => {
  const { step, correct } = useSelector((state) => state.questions);
  const geographyQuestion = geographyQuestions[step];
  const totalLength = geographyQuestions.length;

  return (
    <>
      {step !== geographyQuestions.length ? (
        <Game step={step} question={geographyQuestion} totalLength={totalLength} />
      ) : (
        <Result question={geographyQuestions} correct={correct} />
      )}
    </>
  );
};

export default Geography;
