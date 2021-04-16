import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./auth/autnReducer";
import mainReducer from "./main/mainReducer";
import newsReducer from "./news/newsReducer";
import thunkMiddleware from "redux-thunk";
import profileReducer from "./profile/profileReducer";

const reducers = combineReducers({
  profile: profileReducer,
  auth: authReducer,
  news: newsReducer,
  main: mainReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
