import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }

interface PhotosState {
  photos: Photo[];
  userId: number;
  albumId: number;
}

const initialState: PhotosState = {
  photos: [],
  userId: 0,
  albumId:0
};

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    setPhotos: (state, action: PayloadAction<Photo[]>) => {
      state.photos = action.payload;
    },
    setUserId: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
    },
    setAlbumId: (state, action: PayloadAction<number>) => {
        state.albumId = action.payload;
    },
  },
});

export const { setPhotos, setUserId, setAlbumId } = photoSlice.actions;
export default photoSlice.reducer;
