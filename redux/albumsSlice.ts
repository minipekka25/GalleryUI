import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Album {
    userId: number;
    id: number;
    title: string;
  }

interface AlbumState {
  albums: Album[];
  userId: number;
}

const initialState: AlbumState = {
  albums: [],
  userId: 1,
};

const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    setAlbums: (state, action: PayloadAction<Album[]>) => {
      state.albums = action.payload;
    },
    setUserId: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
    },
  },
});

export const { setAlbums, setUserId } = albumSlice.actions;
export default albumSlice.reducer;
