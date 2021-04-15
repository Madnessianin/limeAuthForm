import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const MyHeader = ({className}) => {
  const url = useLocation();
  const [urlKey, setUrlKey] = useState(url.pathname);
  useEffect(() => {
    switch (url.pathname) {
      case "/profile": {
        setUrlKey("2");
        break;
      }
      case "/news": {
        setUrlKey("3");
        break;
      }
      case "/": {
        setUrlKey("1");
        break;
      }
    }
  }, [url]);
  return (
    <Header className={className}>
      <Menu
        mode="horizontal"
        theme="dark"
        selectedKeys={[urlKey]}
      >
        <Menu.Item key="1">
          <Link to="/">Главная</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/profile">Мой профиль</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/news">Новости</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default MyHeader;
