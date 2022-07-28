import { createStore } from '@reduxjs/toolkit';
import { counterReducer } from './reducers/counter';

export const store = createStore(counterReducer);
