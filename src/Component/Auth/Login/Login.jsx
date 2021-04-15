import React from "react";
import style from "./Login.module.scss";
import loginImg from "./../../../assets/Img/loginImage.jpg";
import loginLogo from "./../../../assets/Img/loginLogo.jpg";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";

const Login = () => {
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
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Form name="login" className={style.form} onFinish={onSubmit}>
      <Form.Item
        name="login"
        rules={[{ required: true, message: "Пожалуйста, введите свое имя!" }]}
      >
        <Input placeholder="логин" className={style.input} />
      </Form.Item>
      <Form.Item
        name="password"
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
