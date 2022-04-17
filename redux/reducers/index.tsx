import { combineReducers } from "redux";
import navReducer from "../reducers/navbarReducer";
const reducers = combineReducers({
  navState: navReducer,
});

export default reducers;
