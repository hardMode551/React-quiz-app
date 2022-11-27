import React from 'react'
import { Route, Routes } from 'react-router';

import ChoiseBlock from './components/ChoiseBlock';
import School from './components/Quizes/School'
import English from './components/Quizes/English'
import Geography from './components/Quizes/Geography'

import './index.scss'

function App() {

  return (
      <div className='App'>
        <Routes>
          <Route path='/' element={<ChoiseBlock/>} />
          <Route path='/School-Quiz' element={<School />} />
          <Route path='/eng-Quiz' element={<English />} />
          <Route path='/geography-Quiz' element={<Geography />} />
        </Routes>
      </div>
  );
}

export default App;
