import api from "./apiReducer";
import { combineReducers } from "redux";

export default combineReducers({
    api: api,
  });