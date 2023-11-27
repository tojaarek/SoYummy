import React from 'react';
import PropTypes from 'prop-types';
import { RecipeBox, Image, Title } from './CategoriesResult.styled';
import cutText from 'const/cutText';

const CategoriesResult = ({ onClick, recipe }) => {
  const cuttedTitle = cutText(recipe.title, 26);

  return (
    <RecipeBox onClick={onClick}>
      <Title>{cuttedTitle}</Title>
      <Image src={recipe.thumb} alt={recipe.title} />
    </RecipeBox>
  );
};

CategoriesResult.propTypes = {
  _id: PropTypes.string,
  thumb: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default CategoriesResult;
