import { createStore, combineReducers } from "redux";
import authReducer from "./auth/autnReducer";
import mainReducer from "./main/mainReducer";
import newsReducer from "./news/newsReducer";

import profileReducer from "./profile/profileReducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  authPage: authReducer,
  news: newsReducer,
  main: mainReducer,
});

const store = createStore(reducers);

export default store;
