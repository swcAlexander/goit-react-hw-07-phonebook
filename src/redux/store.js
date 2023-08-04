import { configureStore } from '@reduxjs/toolkit';
import fetchGallery from 'Api/ApiServise';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from 'redux/reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const costomMiddle = state => {
  return next => {
    return action => {
      if (typeof action === 'function') {
        const contactsList = fetchGallery();
        return next(action(state));
      }
      return next(action);
    };
  };
};
const store = configureStore({
  reducer: persistedReducer,
  middleware: [costomMiddle],
});

export const persistor = persistStore(store);
export default store;
