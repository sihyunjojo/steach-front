import React, { useState } from 'react';
import teacher from '../../../assets/teacher.png';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SignUpTeacher } from '../../../store/TeacherAuthSlice.tsx';
import { RootState, AppDispatch } from '../../../store.tsx';

// 이진송
const TeacherSignUp: React.FC = () => {
  // dispatch
  const dispatch: AppDispatch = useDispatch();
  const status = useSelector((state: RootState) => state.user.status);
  const error = useSelector((state: RootState) => state.user.error);
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
      username : string;
      password : string;
      name : string;
      email : string;
      file?: File;
  }

  // 확인이 필요한데, file에 대해서 null값으로 지정
  const [formData, setFormData] = useState<FormData>({
      username: '',
      password: '',
      name: '',
      email: '',
      file: undefined,
  });

  // 학생 회원가입 페이지와 같지만, file 추가로 조금 다름
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (name === 'file' && files) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        file: files[0],
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
      dispatch(SignUpTeacher(formData))
      // axiosSignUp();
      // 아니면 경고 alert
    } else {
      toast.warn("비밀번호를 다시 입력해주세요.", {
        position: "top-center",
      });
    }
  };
  
  // const axiosSignUp = () => {

  //   const formDataToSend = new FormData();
  //   formDataToSend.append('username', formData.username);
  //   formDataToSend.append('password', formData.password);
  //   formDataToSend.append('name', formData.name);
  //   formDataToSend.append('email', formData.email);
  //   if (formData.file) {
  //     formDataToSend.append('file', formData.file);
  //   }


  //   axios.post(`http://43.202.1.52:8080/api/v1/teacher/join`, formDataToSend , {
  //     headers: {
  //       'Content-Type': 'multipart/form-data'
  //     }
  //   })
  //     .then((response) => {
  //       toast.success("회원가입이 완료되었습니다.", {
  //         position: "top-center",
  //       });
  //       const info = {
  //         username: formData.username,
  //         password: formData.password,
  //       };

  //       // dispatch(authActions.login(info));
  //       navigate("/");
  //   })
  //   .catch((err) => {
  //     toast.error("회원가입에 실패했습니다.", {
  //       position: "top-center",
  //     });
  //     console.log(err);
  //   })
  // } 

  // const test = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log(formData)
  //   dispatch(SignUpTeacher(formData))
  // };
    
  return (
    <>
      <ToastContainer autoClose={2000} />
    {/* */}
      {/* <button className='w-20 h-20 color-red' onClick={test}>ㅎㅇ</button> */}
{/*     */}
      <div>
          <img src={teacher} />
        </div>
        <form 
          className="max-w-md mx-auto border-2 rounded-xl p-6 mb-28" 
          onSubmit={handleSubmit}
        >
          <section>
            <label htmlFor="username" className="text-2xl">
              아이디
            </label>
            <input 
              type='text'
              id='username'
              name='username'
              value={formData.username}
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
            <label htmlFor="name" className="text-2xl">닉네임</label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className="border-2 rounded-lg w-full p-2 mb-5"
              required
            />
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
            <label htmlFor="file" className="text-2xl">증명서</label>
            <input
              type='file'
              id='file'
              name='file'
              onChange={handleChange}
              className="border-2 rounded-lg w-full p-2 mb-5"
            />
          </section>
        <button
          type='submit'
          className="w-full text-center bg-orange-300 p-2 rounded-lg hover:bg-orange-400 hover:text-white"
        >
          회원가입</button>
        </form>
    </>
  );
}

export default TeacherSignUp;