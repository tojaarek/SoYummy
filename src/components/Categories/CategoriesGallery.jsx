import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List } from './CategoriesGallery.styled';
import {
  fetchCategoryRecipes,
  fetchCategoriesList,
} from 'redux/actions/recipes.actions';
import { useNavigate } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import CategoriesResult from 'components/CategoriesResult/CategoriesResult';

const CategoriesGalleryImage = ({ categoryName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchCategoriesList())
      .then(() => {
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading data', error);
        setLoading(false);
      });
  }, [dispatch]);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchCategoryRecipes(categoryName))
      .then(() => {
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading data', error);
        setLoading(false);
      });
  }, [dispatch, categoryName]);

  const recipes = useSelector(state => state.recipes.categories[categoryName]);

  const displayedRecipes = recipes ?? [];

  return (
    <List>
      {displayedRecipes.map(recipe => (
        <CategoriesResult
          key={recipe._id}
          recipe={recipe}
          onClick={() => navigate('/main/recipe/' + recipe._id)}
        />
      ))}
      {loading && <Loader />}
    </List>
  );
};

export default CategoriesGalleryImage;
