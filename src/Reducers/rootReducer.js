import queryParamsReducer from "./queryParamsReducer";
import requestReducer from "./requestReducer";
import sendDataReducer from "./sendDataReducer"
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    addquery:queryParamsReducer,
    request:requestReducer,
    senddata:sendDataReducer
})

export default rootReducer