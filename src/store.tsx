import { configureStore } from "@reduxjs/toolkit";
import lecturesReducer from "./store/lecturesSlice";
import AuthReducer from "./store/AuthSlice.tsx";

// 중앙 스토어 설정
const store = configureStore({
  reducer: {
    lectures: lecturesReducer,
    authentication: AuthReducer,
  },
});

// RootState 타입 정의
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
