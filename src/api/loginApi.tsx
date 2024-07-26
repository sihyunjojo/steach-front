import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// 로그인 요청 폼 형식
interface loginFormData {
  username: string;
  password: string;
}

// 로그인 요청 후 반환 폼 형식
interface returnloginFormData {
  username: string;
  name: string;
  email: string;
  token: string;
  role: string;
}

// 로그인 함수
const login = createAsyncThunk<returnloginFormData, loginFormData>(
  "loginStudent",
  async (loginFormData, thunkAPI) => {
    try {
      const formDataToSend = {
        username: loginFormData.username,
        password: loginFormData.password,
      };

      const response = await axios.post(
        "http://43.202.1.52:8080/api/v1/login",
        formDataToSend,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export default login;
