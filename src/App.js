import React, { useEffect } from "react";
import "./App.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./Component/Auth/Login/Login";
import { Layout } from "antd";
import Header from "./Component/Header/Header";
import Profile from "./Component/Profile/Profile";
import Main from "./Component/Main/Main";
import News from "./Component/News/News";
import { useDispatch } from "react-redux";
import { setAuth } from "./Redux/auth/autnReducer";

const { Content, Footer } = Layout;

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAuth());
  }, []);

  return (
    <Layout className="app">
      <Header selector={"header"} />
      <Content className="content">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/main" />} />
          <Route path="/main" render={() => <Main />} />
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/login" render={() => <Login />} />
        </Switch>
      </Content>
    </Layout>
  );
};

export default App;
