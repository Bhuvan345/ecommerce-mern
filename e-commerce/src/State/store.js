import thunk from "redux-thunk";
import { authReducer } from "./Auth/Reducer";

import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { customerProductReducer } from "./Product/Reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  product: customerProductReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
