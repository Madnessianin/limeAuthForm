const SET_AUTH = "SET_AUTH" 
const initialState = {
  isAuth: false,
  login: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH: {

    }
    default: {
      return state;
    }
  }
};

export default authReducer;
