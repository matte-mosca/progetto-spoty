import { configureStore } from "@reduxjs/toolkit";
import PlayerReducer from "../Reducers/PlayerReducer";

const store = configureStore({
  reducer: PlayerReducer,
});

export default store;
