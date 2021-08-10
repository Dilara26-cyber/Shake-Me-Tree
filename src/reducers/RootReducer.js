import { combineReducers } from "redux";
import { randomNum } from "./treeReducers";

const RootReducer = combineReducers({ storeState: randomNum});

export default RootReducer;