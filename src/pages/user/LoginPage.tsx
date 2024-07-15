import React from 'react';
import LoginPage, { Username, Password, Submit, Title, Logo, Banner } from './index.tsx';
import LoginLogo from 'react-login-page/logo';
import LoginBannerBgImg from '../../assets/banner.jpg';

const styles = { height: 460 };

const Login = () => (
  <div style={styles}>
    <LoginPage>
      <Username label="UserName" name="userUserName" />
      <Password label="PassWord" placeholder="PassWord" name="userPassword" />
      <Submit>로그인</Submit>
      <Submit keyname="reset">
        회원가입
      </Submit>
      <Banner>
        <img src={LoginBannerBgImg} alt="banner" />
      </Banner>
      <Title visible={false} />
      <Logo>
        <LoginLogo />
      </Logo>
    </LoginPage>
  </div>
);

export default Login;