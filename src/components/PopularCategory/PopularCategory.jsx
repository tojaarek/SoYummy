import React from 'react';
import PropTypes from 'prop-types';
import RecipeTile from 'components/RecipeTile/RecipeTile';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Container, Title, List, Button } from './PopularCategory.styled';

const PopularCategory = ({ title, category }) => {
  const navigate = useNavigate();

  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });

  let recipes;
  if (isDesktop) {
    recipes = 4;
  } else if (isTablet) {
    recipes = 2;
  } else {
    recipes = 1;
  }

  return (
    <Container>
      <Title>{title}</Title>
      <List>
        {category.slice(0, recipes).map(recipe => (
          <RecipeTile
            key={recipe._id}
            recipe={recipe}
            onClick={() => navigate('/main/recipe/' + recipe._id)}
          ></RecipeTile>
        ))}
      </List>
      <Button onClick={() => navigate('/main/categories/' + title)}>
        See all
      </Button>
    </Container>
  );
};

PopularCategory.propTypes = {
  title: PropTypes.string,
  category: PropTypes.array,
};

export default PopularCategory;
