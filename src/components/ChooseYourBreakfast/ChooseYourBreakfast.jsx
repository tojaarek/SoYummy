import React from 'react';
import { Container, Button } from './ChooseYourBreakfast.styled';

const ChooseYourBreakfast = () => {
  return (
    <Container>
      <p>
        <span>Delicious and healthy</span> way to enjoy a variety of fresh
        ingredients in one satisfying meal
      </p>
      <Button to="/categories/Breakfast">See recipes ➔</Button>
    </Container>
  );
};

export default ChooseYourBreakfast;
