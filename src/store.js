import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducer';
import {loadState, saveState} from "./localStorage";

const persistantState = loadState();
const store = configureStore(
  {reducer: cartReducer},
  persistantState
);

store.subscribe(() => {
  saveState({
    products: store.getState().products
  });
});

export default store;