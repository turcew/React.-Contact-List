import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

const logger = createLogger();

import contactReducer from "./slices/contactSlice";

export default configureStore({
  reducer: {
    contactList: contactReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
