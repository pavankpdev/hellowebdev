// libraries
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

// configs
import { persistConfig } from "../../configs/reduxPersist.config";

// Reducers
import user from "./User/User.reducer";

// root reducer
const rootReducer = combineReducers({ user });

// warpping up the root reducer with redux-persist to store state in localstorage storage
export const persistedState = persistReducer(persistConfig, rootReducer);

export default rootReducer;
