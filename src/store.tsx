import { configureStore } from "@reduxjs/toolkit";
import lecturesReducer from "./store/lecturesSlice";
import studentReducer from "./store/AuthSlice.tsx";
import lectureslistReducer from "./store/lectureslist.tsx";


// 중앙 스토어 설정
const store = configureStore({
  reducer: {
    lectures: lecturesReducer,
    studentAuth: studentReducer,
    lectureslist: lectureslistReducer,
  },
});

// RootState 타입 정의
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
