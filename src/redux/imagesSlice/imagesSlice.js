import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit';
import axios from 'axios';

import { Alert } from 'react-native';
import { App_Constants } from '../../constants';

/* ------------- Get Images Thunk (Api (async) Call to get data) ------------- */
export const getAllImages = createAsyncThunk(
    'images/getAll',
    async (page) => {
        try {
            let url = `${App_Constants.BASE_URL}/photos?page=${page}&client_id=${App_Constants.ACCESS_KEY}`;
            const res = await axios.get(url);
            return res.data;
        } catch(err) {
            console.log("🚀 ~ file: logInSlice.js:19 ~ err:", err);
            throw err.message;
        }
    },
);

/* ------------- Album Slice (reducer) ------------- */
const imagesSlice = createSlice({
    name: 'album',
    /* ------------- Initial State ------------- */
    initialState: {
        allImages: [],
        loading: false,
        error: '',
        currentPage: 0,
    },
    /* ------------- Reducers ------------- */
    reducers: {
        reset: (state, action) => {
            state.allImages = [];
        },
    },

    /* ------------- Extra Reducers ------------- */
    extraReducers: (builder) => {

        /* ------------- Request Case of get Images ------------- */
        builder.addCase(getAllImages.pending, (state, action) => {
            state.loading = true;
            state.currentPage = action.meta.arg;
            state.allImages = action.meta.arg == 1 ? [] : state.allImages;
        });
        /* ------------- Success Case of get Images ------------- */
        builder.addCase(getAllImages.fulfilled, (state, action) => {
            state.loading = false;
            state.allImages = state.currentPage == 1 ? action.payload : [...state.allImages, ...action.payload];
        });
        /* ------------- Failiure Case of get Images ------------- */
        builder.addCase(getAllImages.rejected, (state, action) => {
            state.loading = false;
            Alert.alert('', action?.error?.message);
        });
    }
});

export const { reset } = imagesSlice.actions;
export default imagesSlice.reducer;