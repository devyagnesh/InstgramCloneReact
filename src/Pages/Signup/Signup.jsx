import React, { useState } from "react";

import Flex from "../../Layouts/Flex/Flex";
import { Link } from "react-router-dom";
import AuthSlider from "../../Components/AuthSlider/AuthSlider";
import AuthWrapper from "../../Components/AuthWrapper/AuthWrapper";
import OrDivider from "../../Components/OrDivider/OrDivider";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import Form from "../../Components/Form/Form";

import AuthOption from "../../Components/AuthOption/AuthOption";
import Logo from "../../Components/Logo/Logo";
import Footer from "../../Components/Footer/Footer";
import { AiFillFacebook } from "react-icons/ai";
import {IoCloseCircleOutline} from "react-icons/io5"
import style from "./Signup.module.css";
import useInput from "../../hooks/useInput";
import Validator from "../../Utils/Validator";

const Login = () => {
  const [
    emailOrPhone,
    emailOrPhoneFocus,
    setEmailOrPhone,
    setEmailOrPhoneFocus,
    emailOrPhoneHasError,
  ] = useInput((value) => !Validator.isEmailOrPhone(value));
  /**
   * instgram allows full name to null or no value
   * if there is value for fullname instagram allows anytype of value so there is no need of validation
   * because there is no validation for name i am simply returning false in callback function that means will no error
   */
  const [
    fullname,
    fullnameFocus,
    setFullname,
    setFullnameFocus,
    fullnameHasError,
  ] = useInput((value) => false);
  const [
    username,
    usernameFocus,
    setUsername,
    setUsernameFocus,
    usernameHasError,
  ] = useInput((value) => !Validator.isValidUsername(value));
  const [
    password,
    passwordFocus,
    setPassword,
    setPasswordFocus,
    passwordHasError,
  ] = useInput((value) => value.length < 8);
  const [passwordShown, setPasswordShown] = useState(false);
  const [errMessage,setErrMessage] = useState('');

  const isEmpty = (!emailOrPhone || !fullname || !username || !password || emailOrPhoneHasError || fullnameHasError || usernameHasError || passwordHasError);
  
 

  const togglePasswordVisiblitiy = () => setPasswordShown(!passwordShown);

  return (
    <>
      <Flex
        Width="100%"
        Height="95%"
        Valign={true}
        Halign={true}
        className={style["layout__wrapper"]}
      >
        <AuthSlider />

        <Flex
          Valign={true}
          Halign={true}
          Direction={"column"}
          className={style["auth_wrap"]}
        >
          <AuthWrapper>
            <Logo />
            <h2 className={style["heading__text"]}>
              Signup to see photos and videos from your friends.
            </h2>
            <Button className={style["btn_oauth"]}>
              <AiFillFacebook style={{ fontSize: "2rem" }} /> Log in with
              Facebook
            </Button>
            <OrDivider />
            <Form autoComplete="off">
              <Input
                type={"text"}
                name="emailOrPhone"
                id="emailOrPhone"
                placeholder="Mobile number or email address"
                hasValue={emailOrPhone && emailOrPhoneFocus}
                onChange={setEmailOrPhone}
                onFocus={setEmailOrPhoneFocus}
                errorIcon = {emailOrPhoneHasError && <IoCloseCircleOutline style={{fontSize:'2.4rem',color:'red'}}/>}
              />

              <Input
                type={"text"}
                name="fullname"
                id="fullname"
                placeholder="Full Name"
                hasValue={fullname && fullnameFocus}
                onChange={setFullname}
                onFocus={setFullnameFocus}
              />

              <Input
                type={"text"}
                name="username"
                id="username"
                placeholder="Username"
                hasValue={username && usernameFocus}
                onChange={setUsername}
                onFocus={setUsernameFocus}
                errorIcon={usernameHasError && <IoCloseCircleOutline style={{fontSize:'2.4rem',color:'red'}}/>}
              />

              <Input
                type={passwordShown ? "text" : "password"}
                originalType={"password"}
                name="userpassword"
                id="userpassword"
                className={style["ig_input_controll"]}
                placeholder="Password"
                hasValue={password && passwordFocus}
                onChange={setPassword}
                onFocus={setPasswordFocus}
                onClick={togglePasswordVisiblitiy}
                isPasswordShown={passwordShown}
                errorIcon={passwordHasError && <IoCloseCircleOutline style={{fontSize:'2.4rem',color:'red'}}/>}
              />

              <Button disabled={isEmpty}>Signup</Button>
            </Form>
          </AuthWrapper>

          <AuthOption to={"/"} text="Have an account ?" linkText="Login" />
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};

export default Login;
