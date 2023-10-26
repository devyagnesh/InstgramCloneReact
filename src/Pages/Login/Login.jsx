import React, { useState, useContext } from "react";
import Flex from "../../Layouts/Flex/Flex";
import style from "./Login.module.css";
import { Link } from "react-router-dom";
import AuthSlider from "../../Components/AuthSlider/AuthSlider";
import AuthWrapper from "../../Components/AuthWrapper/AuthWrapper";
import OrDivider from "../../Components/OrDivider/OrDivider";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import Form from "../../Components/Form/Form";
import LoginWithFb from "../../Components/LoginWithFb/LoginWithFb";
import AuthOption from "../../Components/AuthOption/AuthOption";
import Logo from "../../Components/Logo/Logo";
import Footer from "../../Components/Footer/Footer";
import AuthContext from '../../Contexts/AuthContext';
import useInput from '../../hooks/useInput';
import Validator from '../../Utils/Validator';

const Login = () => {
  const [username,usernameFocus,setUsername,setUsernameFocus,usernameHasError] = useInput((value)=>!Validator.isValidEmailOrPhoneOrUsername(value))
  

  const [password,passwordFocus,setPassword,setPasswordFocus,passwordHasError] = useInput(value=>{});
  const [passwordShown, setPasswordShown] = useState(false);

  const isEmpty = (!username || !password);

  const AuthCTX = useContext(AuthContext);

 


  const togglePasswordVisiblitiy = ()=>setPasswordShown(!passwordShown);
  
  const handleLogin = function(e){
    e.preventDefault();

    if(isEmpty){
        
    }
    AuthCTX.onLogin(username,password);
  }

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

            <Form autoComplete="off" onSubmit={handleLogin}>
              <Input
                type={"text"}
                name="username"
                id="username"
                placeholder="Phone number, username or email address"
                hasValue={username && usernameFocus}
                onChange={setUsername}
                onFocus={setUsernameFocus}
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
              />

              <Button disabled={isEmpty || (usernameHasError || passwordHasError)}>Log in</Button>
            </Form>
            <OrDivider />
            <LoginWithFb />
            <Link to={"#"} className={style["forgot__password"]}>
              Forgotten your password?
            </Link>
          </AuthWrapper>

          <AuthOption to={'/signup'} text="Don't have an account?" linkText='Signup'/>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};

export default Login;
