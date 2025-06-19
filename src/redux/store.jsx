import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/reducers'; 

const store = configureStore({
  reducer: counterReducer, 
});

export default store;