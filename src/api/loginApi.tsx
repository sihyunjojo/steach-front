import axios from "axios";

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
const loginApi = async (
  loginFormData: loginFormData
): Promise<returnloginFormData> => {
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

  return response.data;
};

export default loginApi;
