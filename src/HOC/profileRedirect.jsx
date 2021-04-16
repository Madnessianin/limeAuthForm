import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { getIsAuth } from "../Redux/auth/authSelector";

const profileRedirect = (Component) => (props) => {
  const isAuth = useSelector((state) => getIsAuth(state));
  if (isAuth) {
    return <Redirect to="/profile " />;
  }
  return <Component {...props} />;
};

export default profileRedirect;
