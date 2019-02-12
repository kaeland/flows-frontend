import { combineReducers } from "redux";
import auth from "./auth";
import nav from "./nav";
import profile from "./profile";
import machineRound from "./machineRound";
import chart from './chart'

export default combineReducers({
  auth,
  nav,
  profile, 
  chart
});
