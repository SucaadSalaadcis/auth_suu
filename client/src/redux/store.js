
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice.js';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // stores our data inside localStorage

const rootReducer = combineReducers({ user: userReducer }); // combine reducer just only we have one reducer

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // it prevent error while we using toolkit
        }),
});

export const persistor = persistStore(store); // we are saving our store inside localStorage


// getDefaultMiddleware = is useful if you want to add some custom middleware,
// but also still want to have the default middleware added as well