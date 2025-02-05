import { configureStore } from '@reduxjs/toolkit';
import messageSlice from './message.slice.ts';

export const store = configureStore({
  reducer: {
    message: messageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
