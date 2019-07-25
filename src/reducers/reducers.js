import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import i18n from "../i18n/i18n";

export default combineReducers({
  global: globalReducer,
  i18n: () => ({
    ...i18n
  })
});
