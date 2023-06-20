import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
//Reducers
import imagesReducer from './imagesSlice/imagesSlice';

const reducers = combineReducers({
    album: imagesReducer
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['album'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: false,
    middleware: [thunk],
});

export default store;