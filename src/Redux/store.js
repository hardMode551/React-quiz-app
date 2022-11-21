import { configureStore } from "@reduxjs/toolkit";
import questions from './slices/questionsSlice'

export const store = configureStore({
  reducer: {
    questions,
  },
})

export default store;
