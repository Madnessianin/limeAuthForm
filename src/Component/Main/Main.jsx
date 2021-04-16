import { Button, Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import style from './Main.module.scss';
const Main = () => {
  return (
  <div className={style.inner}>
    <Result
    title="Страница в разработке, пожалуйста, перейдите на другую!"
    extra={[
      <Button type="primary" key="profile">
        <Link to="/profile">
          Перейти в профиль
        </Link>
      </Button>,
      <Button>
        <Link to="/news" key="news">
          Перейти в новости
        </Link>
      </Button>
    ]}
  />
  </div>
  );
};

export default Main;
