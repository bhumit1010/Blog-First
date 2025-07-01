import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../fetures/authslice"; 

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
