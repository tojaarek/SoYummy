import React from 'react';
import PropTypes from 'prop-types';
import { RecipeBox, Image, Title } from './RecipeTitle.styled';

const RecipeTile = ({ onClick, recipe }) => {
  const cutTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + '...';
    }
    return title;
  };

  const cuttedTitle = cutTitle(recipe.title, 26);
  return (
    <RecipeBox onClick={onClick}>
      <Title>{cuttedTitle}</Title>
      <Image src={recipe.thumb} alt={recipe.title} />
    </RecipeBox>
  );
};

RecipeTile.propTypes = {
  _id: PropTypes.string,
  thumb: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default RecipeTile;
