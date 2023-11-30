import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../components/todoslice';

export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
});
