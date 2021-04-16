const SET_AUTH = "SET_AUTH";
const SET_MESSAGE = "SET_MESSAGE";
const initialState = {
  isAuth: false,
  login: null,
  message: null,
};

const tokenGenerator = () => {
  return (
    Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2)
  );
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH: {
      return {
        ...state,
        login: action.login,
        isAuth: action.isAuth,
      };
    }
    case SET_MESSAGE: {
      return {
        ...state,
        message: action.message,
      };
    }
    default: {
      return state;
    }
  }
};

export const setUserData = (login, isAuth) => ({
  type: SET_AUTH,
  login,
  isAuth,
});
export const setMessage = (message) => ({ type: SET_MESSAGE, message });

export const setAuth = () => (dispatch) => {
  const token = localStorage.getItem("user");
  if (token !== null) {
    const login = localStorage.getItem(token);
    dispatch(setUserData(login, true));
  }
};
export const login = (data) => (dispatch) => {
  const { name, password } = data;
  if (name === "Admin" && password === "12345") {
    const token = tokenGenerator();
    localStorage.setItem("user", token);
    localStorage.setItem(token, name);
    dispatch(setUserData(login, true));
  } else {
    dispatch(setMessage("Имя пользователя или пароль введены не верно!"));
  }
};

export default authReducer;
