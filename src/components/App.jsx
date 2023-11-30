import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'layout/Layout';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import SigninPage from 'pages/SigninPage/SigninPage';
import { refreshUser } from 'redux/actions/users.actions';
import { Navigate } from 'react-router-dom';
import RecipesPage from 'pages/RecipesPage/RecipesPage';
import CategoriesPage from 'pages/CategoriesPage/CategoriesPage';
import SearchPage from 'pages/SearchPage/SearchPage';
import AddRecipePage from 'pages/AddRecipePage/AddRecipePage';
import { useAuth } from 'hooks/useAuth';
import MainPage from 'pages/MainPage/MainPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { Loader } from './Loader/Loader';
import MyRecipesPage from 'pages/MyRecipesPage/MyRecipesPage';
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage';
import { RestrictedRoute } from './Routes/RestrictedRoute';
import { PrivateRoute } from './Routes/PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/main" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute redirectTo="/signin" component={<MainPage />} />
          }
        />
        <Route
          path="/main/recipe/:recipeId"
          element={
            <PrivateRoute redirectTo="/signin" component={<RecipesPage />} />
          }
        />
        <Route
          path="/main/categories"
          element={<Navigate replace to={'/main/categories/Beef'} />}
        />
        <Route
          path="/main/categories/:categoryName"
          element={
            <PrivateRoute redirectTo="/signin" component={<CategoriesPage />} />
          }
        />
        <Route
          path="/main/search"
          element={
            <PrivateRoute redirectTo="/signin" component={<SearchPage />} />
          }
        />
        <Route
          path="/main/ownRecipes/add"
          element={
            <PrivateRoute redirectTo="/signin" component={<AddRecipePage />} />
          }
        />
        <Route
          path="/main/ownRecipes/my"
          element={
            <PrivateRoute redirectTo="/signin" component={<MyRecipesPage />} />
          }
        />
        <Route
          path="/main/favorites"
          element={
            <PrivateRoute redirectTo="/signin" component={<FavoritesPage />} />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
      <Route
        path="/"
        element={
          <RestrictedRoute redirectTo="/main" component={<WelcomePage />} />
        }
      />
      <Route
        path="/register"
        element={
          <RestrictedRoute redirectTo="/main" component={<RegisterPage />} />
        }
      />
      <Route
        path="/signin"
        element={
          <RestrictedRoute redirectTo="/main" component={<SigninPage />} />
        }
      />
    </Routes>
  );
};

export default App;
