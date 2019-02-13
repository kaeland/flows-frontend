import { combineReducers } from "redux";
import auth from "./auth";
import nav from "./nav";
import profile from "./profile";
import machineRound from "./machineRound";
import chart from "./chart";
import plant from "./plant";
import round from "./round";

export default combineReducers({
  auth,
  nav,
  profile,
  chart,
  plant, 
  round
});
