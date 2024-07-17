import { configureStore } from '@reduxjs/toolkit';
import lecturesReducer, { LecturesState } from './store/lecturesSlice';

const store = configureStore({
  reducer: {
    lectures: lecturesReducer,
  },
});

export type RootState = {
  lectures: LecturesState;
};
export type AppDispatch = typeof store.dispatch;

export default store;
