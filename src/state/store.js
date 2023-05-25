import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer/counterReducer'
import storage from "redux-persist/lib/storage"; 
import persistReducer from 'redux-persist/es/persistReducer';
const reducers = combineReducers({
  counter: counterReducer
});
const persistConfig = {
  key: "root", 
  storage,
  
};
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer
})