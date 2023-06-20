import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit';
import axios from 'axios';

import { Alert } from 'react-native';
import { App_Constants } from '../../constants';

export const getAllImages = createAsyncThunk(
    'images/getAll',
    async (page) => {
        try {
            let url = `${App_Constants.BASE_URL}?page=${page}&client_id=${App_Constants.ACCESS_KEY}`;
            const res = await axios.get(url);
            return res.data;
        } catch(err) {
            console.log("🚀 ~ file: logInSlice.js:19 ~ err:", err);
            throw err.message;
        }
    },
);


const imagesSlice = createSlice({
    name: 'images',
    initialState: {
        allImages: [],
        loading: false,
        error: '',
        currentPage: 0,
    },
    reducers: {
        reset: (state, action) => {
            state.allImages = [];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllImages.pending, (state, action) => {
            console.log("🚀 ~ file: imagesSlice.js:40 ~ builder.addCase ~ action:", action);
            console.log("🚀 ~ file: imagesSlice.js:40 ~ builder.addCase ~ state:", state);
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