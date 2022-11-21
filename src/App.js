import React from 'react'
import { Route, Routes } from 'react-router';
import { useSelector } from 'react-redux'

import ChoiseBlock from './components/ChoiseBlock';
import SchoolQuiz from './components/SchoolQuiz';
import EngQuiz from './components/EngQuiz';
import Geography from './components/Quizes/Geography';

import './index.scss'






function App() {
  return (
      <div className='App'>
        <Routes>
          <Route path='/' element={<ChoiseBlock/>} />
          <Route path='/School-Quiz' element={<SchoolQuiz />} />
          <Route path='/eng-Quiz' element={<EngQuiz />} />
          <Route path='/geography-Quiz' element={<Geography />} />
        </Routes>
      </div>
  );
}

export default App;
