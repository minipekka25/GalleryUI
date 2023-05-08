import { configureStore } from '@reduxjs/toolkit';
import usersReducer from "./usersSlice"
import albumsReducer from "./albumsSlice"
import photosReducer from "./photosSlice"

const store = configureStore({
  reducer: {
    users: usersReducer,
    album: albumsReducer,
    photo: photosReducer
  },
});

export default store;
