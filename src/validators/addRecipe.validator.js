import { mixed, object, string, array } from 'yup';

const addRecipeSchema = object().shape({
  title: string().required('Recipe title is required'),
  description: string().required('Recipe description is required'),
  category: string().required('Recipe category is required'),
  time: string().required('Cooking time is required'),
  thumb: mixed().required('Picture is required'),
  ingredients: array()
    .of(
      object().shape({
        id: string().required('Ingredient id is required'),
        name: string().required('Ingredient name is required'),
        measure: string().required('Ingredient measure is required'),
      })
    )
    .required('Recipe ingredients are required'),
  instructions: string().required('Cooking instructions are required'),
});

export default addRecipeSchema;
