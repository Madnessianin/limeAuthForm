import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Login from "./Component/Auth/Login/Login";
import { Layout } from "antd";
import Header from "./Component/Header/Header";

const { Content, Footer } = Layout;

const App = () => {
  return (
    <Layout className="app">
      <Header className={"header"} />
      <Content>
        <Switch>
          <Route path="/login" render={() => <Login />} />
        </Switch>
      </Content>
      <Footer className="footer">
        Форма авторизации ©2021 Created by Alex
      </Footer>
    </Layout>
  );
};

export default App;
