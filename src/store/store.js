import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducers/rootReducer";

export function configureStore() {
  return createStore(
    rootReducer,applyMiddleware(thunk)
  );
}
