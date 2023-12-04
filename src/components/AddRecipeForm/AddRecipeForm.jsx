import { Form, Button } from './AddRecipeForm.styled';
import RecipeDescriptionFields from 'components/RecipeDescriptionFields/RecipeDescriptionFields';
import RecipeIngredientsFields from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationFields from 'components/RecipePreparationFields/RecipePreparationFields';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addRecipe } from 'redux/actions/recipes.actions';

const AddRecipeForm = () => {
  const [picture, setPicture] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [time, setTime] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState('');
  const dispatch = useDispatch();

  const handleSetPicture = image => {
    setPicture(image);
  };

  const handleSetTitle = value => {
    setTitle(value);
  };

  const handleSetDescription = value => {
    setDescription(value);
  };

  const handleSetCategory = value => {
    setCategory(value);
  };

  const handleSetTime = value => {
    setTime(value);
  };

  const handleSetIngredients = value => {
    setIngredients(value);
  };

  const handleSetInstructions = value => {
    setInstructions(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    let array = [];

    ingredients.forEach(({ inputData }) => {
      array.push(inputData);
    });

    const newRecipe = new FormData();
    newRecipe.append('title', title);
    newRecipe.append('description', description);
    newRecipe.append('category', category);
    newRecipe.append('time', time);
    newRecipe.append('thumb', picture);
    newRecipe.append('ingredients', JSON.stringify(array));
    newRecipe.append('instructions', instructions);

    dispatch(addRecipe(newRecipe));
  };

  return (
    <Form id="addRecipe" autoComplete="off" onSubmit={handleSubmit}>
      <RecipeDescriptionFields
        image={handleSetPicture}
        title={handleSetTitle}
        description={handleSetDescription}
        category={handleSetCategory}
        time={handleSetTime}
      />
      <RecipeIngredientsFields selectedIngredients={handleSetIngredients} />
      <RecipePreparationFields preparation={handleSetInstructions} />
      <Button type="submit">Add</Button>
    </Form>
  );
};

export default AddRecipeForm;
