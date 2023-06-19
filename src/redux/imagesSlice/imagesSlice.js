import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit';
import axios from 'axios';

import { Alert } from 'react-native';

export const getAllImages = createAsyncThunk(
    'movies/getAll',
    async (movieType) => {
        try {
            let url = `https://onlinemovies007.com/api/${movieType ? movieType : 'home'}`;
            const res = await axios.get(url);
            return res.data;
        } catch(err) {
            console.log("🚀 ~ file: logInSlice.js:19 ~ err:", err);
            throw err.message;
        }
    },
);


const imagesSlice = createSlice({
    name: 'movies',
    initialState: {
        allImages: [],
        loading: false,
        error: '',
    },
    reducers: {
        reset: (state, action) => {
            state.allImages = [];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllImages.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getAllImages.fulfilled, (state, action) => {
            state.loading = false;
            state.allImages = action.payload;
        });
        builder.addCase(getAllImages.rejected, (state, action) => {
            state.loading = false;
            Alert.alert('', action?.error?.message);
        });
    }
});

export const { reset } = imagesSlice.actions;
export default imagesSlice.reducer;