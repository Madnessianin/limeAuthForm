export const getIsAuth = (state) => {
  return state.auth.isAuth;
};

export const getErrorMessage = (state) => {
  return state.auth.message;
};

export const getLogin = (state) => {
    return state.auth.login;
}