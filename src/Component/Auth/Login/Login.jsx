import React, { useEffect, useState } from "react";
import style from "./Login.module.scss";
import loginImg from "./../../../assets/Img/loginImage.jpg";
import loginLogo from "./../../../assets/Img/loginLogo.jpg";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../Redux/auth/autnReducer";
import profileRedirect from "../../../HOC/profileRedirect";
import { getErrorMessage } from "../../../Redux/auth/authSelector";

const Login = profileRedirect(() => {
  return (
    <div className={style.inner}>
      <div className={style.content}>
        <img className={style.logo} src={loginLogo} alt="" />
        <h1 className={style.title}>Профиль</h1>
        <LoginForm />
      </div>
      <img className={style.loginImg} src={loginImg} alt="" />
    </div>
  );
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(login(data));
  };
  const error = useSelector((state) => getErrorMessage(state));
  const [errorText, setErrorText] = useState(error);
  useEffect(() => {
    setErrorText(error);
  }, [error]);

  return (
    <Form name="login" className={style.form} onFinish={onSubmit}>
      <Form.Item
        name="name"
        validateStatus={errorText ? "error" : null}
        help={errorText ? errorText : ""}
        rules={[{ required: true, message: "Пожалуйста, введите свое имя!" }]}
      >
        <Input placeholder="логин" className={style.input} />
      </Form.Item>
      <Form.Item
        name="password"
        validateStatus={errorText ? "error" : null}
        help={errorText ? errorText : ""}
        rules={[{ required: true, message: "Пожалуйста, введите пароль!" }]}
      >
        <Input.Password
          type="password"
          placeholder="пароль"
          className={style.input}
        />
      </Form.Item>

      <div className={style.btns}>
        <Button type="primary" htmlType="submit" className={style.btnItem}>
          Войти
        </Button>
      </div>
    </Form>
  );
};

export default Login;
