import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { usersReducer } from '../redux/slice/users.slice';
import { addRecipeReducer } from './slice/ownRecipes.slice';
import { recipesReducer } from './slice/recipes.slice';
import { favoritesReducer } from './slice/favorites.slice';
import { shoppingListReducer } from './slice/shoppingList.slice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    users: persistReducer(persistConfig, usersReducer),
    recipes: recipesReducer,
    ownRecipes: addRecipeReducer,
    favorites: favoritesReducer,
    shoppingList: shoppingListReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
