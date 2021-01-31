// libraries
import storage from "redux-persist/lib/storage";

export const persistConfig = {
  key: "redux",
  storage,
  whitelist: ["user", "resources", "contributors"],
};
