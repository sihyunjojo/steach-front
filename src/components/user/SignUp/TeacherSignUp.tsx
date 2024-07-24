import React, { useState } from 'react';
import teacher from '../../../assets/teacher.png';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// 이진송
const TeacherSignUp: React.FC = () => {
  // dispatch
  const dispatch = useDispatch();
  // useNavigate
  const navigate = useNavigate();
  // 비밀번호 확인 검증
  const [confirmPassword, setComfirmPassword] = useState("");

  // 비밀번호 확인 양방향 바인딩
  const handleComfirmPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setComfirmPassword(event.target.value);
  };

  
  interface FormData {
      userId : string;
      password : string;
      email : string;
      uploadfile : File | null;
  }

  // 확인이 필요한데, uploadfile에 대해서 null값으로 지정
  const [formData, setFormData] = useState<FormData>({
      userId: '',
      password: '',
      email: '',
      uploadfile: null,
  });

  // 학생 회원가입 페이지와 같지만, file 추가로 조금 다름
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (name === 'uploadfile' && files) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        uploadfile: files[0],
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  // 회원가입 버튼 눌렀을때 onChange로 실시간으로 폼에 들어감
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 만약 8자이상 16자이하라면 axios요청 보내기
    if (formData.password.length >= 8 && formData.password.length <= 16) {
      axiosSignUp();
      // 아니면 경고 alert
    } else {
      toast.warn("비밀번호를 다시 입력해주세요.", {
        position: "top-center",
      });
    }
  };
  
  const axiosSignUp = () => {

    const formDataToSend = new FormData();
    formDataToSend.append('userId', formData.userId);
    formDataToSend.append('password', formData.password);
    formDataToSend.append('email', formData.email);
    if (formData.uploadfile) {
      formDataToSend.append('uploadfile', formData.uploadfile);
    }


    axios.post(`API`, formDataToSend , {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((response) => {
        toast.success("회원가입이 완료되었습니다.", {
          position: "top-center",
        });
        const info = {
          username: formData.userId,
          password: formData.password,
        };

        dispatch(authActions.login(info));
        navigate("/");
    })
    .catch((err) => {
      toast.error("회원가입에 실패했습니다.", {
        position: "top-center",
      });
      console.log(err);
    })
  } 
    
  return (
    <>
      <ToastContainer autoClose={2000} />
        <div>
          <img src={teacher} />
        </div>
        <form 
          className="max-w-md mx-auto border-2 rounded-xl p-6 mb-28" 
          onSubmit={handleSubmit}
        >
          <section>
            <label htmlFor="userId" className="text-2xl">
              아이디
            </label>
            <input 
              type='text'
              id='userId'
              name='userId'
              value={formData.userId}
              onChange={handleChange}
              className="border-2 rounded-lg w-full p-2 mb-5"
              required
            />
          </section>
          <section>
            <div>
            <label htmlFor="password" className="text-2xl">비밀번호</label>
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              className="border-2 rounded-lg w-full p-2"
              required
              />
            {<p className="mt-2 mb-2 text-sm">비밀번호는 8 ~ 16자리여야 합니다.</p>}
            </div>
          </section>
          <section>
            <div>

            <label htmlFor="confirmPassword" className="text-2xl">비밀번호확인</label>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              value={confirmPassword}
              onChange={handleComfirmPassword}
              className="border-2 rounded-lg w-full p-2"
              required
              />
              {formData.password.length >= 8 &&
              confirmPassword.length >= 8 &&
              (formData.password === confirmPassword ? (
                <p className="mt-2 mb-2 text-sm text-red-500">
                비밀번호가 일치합니다.
                </p>
              ) : (
                <p className="mt-2 mb-2 text-sm text-red-500">
                비밀번호가 일치하지 않습니다.
                </p>
              )
              )}
              </div>
          </section>
          <section>
            <label htmlFor="email" className="text-2xl">이메일</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className="border-2 rounded-lg w-full p-2 mb-5"
              required
            />
          </section>
          <section>
            <label htmlFor="uploadfile" className="text-2xl">증명서</label>
            <input
              type='file'
              id='uploadfile'
              name='uploadfile'
              onChange={handleChange}
              className="border-2 rounded-lg w-full p-2 mb-5"
              required
            />
          </section>
          <button type='submit' className="w-full text-center bg-orange-300 p-2 rounded-lg hover:bg-orange-400 hover:text-white"
          onSubmit={()=>{}}>회원가입</button>
        </form>
    </>
  );
}

export default TeacherSignUp;