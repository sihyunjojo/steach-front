import { Slice, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// 타입 정의
export interface AuthState {
  isAuthenticated: boolean;
  token: string;
}

// 초기 상태 정의
export const initialAuthState: AuthState = {
  isAuthenticated: false,
  token: "",
};

// Slice 생성
const authSlice: Slice<AuthState> = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  // 로그인 로그아웃 axios 요청
  reducers: {
    // 로그인
    login(info) {
      const data = {
        username: info.username,
        password: info.password,
      };

      axios
        .post("http://43.202.1.52:8080/api/v1/login", data)
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    logout() {
      initialAuthState.isAuthenticated = false;
      initialAuthState.token = "";
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
