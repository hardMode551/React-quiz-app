import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  step: 0,
  correct: 0,
}

const questionsSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setStep(state, action){
      state.step = action.payload;
    },
    setCorrect(state, action){
      state.correct = action.payload;
    },
  }
})

export const { setStep, setCorrect } = questionsSlice.actions

export default questionsSlice.reducer
