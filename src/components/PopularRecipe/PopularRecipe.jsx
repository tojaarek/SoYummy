import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUserToken } from 'redux/selectors/users.selectors';
import axios from 'axios';
import {
  Container,
  Title,
  List,
  Item,
  Image,
  Name,
  Description,
  Hyperlink,
} from './PopularRecipe.styled';

const PopularRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [isFetch, setIsFetch] = useState(false);
  const userToken = useSelector(selectUserToken);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3030/recipes/popular-recipe',
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );
        if (response) {
          setRecipes(response.data.recipes);
          return response.data.recipes;
        }
      } catch (error) {
        console.error(error);
        throw new Error('Something went wrong...');
      }
    };
    getRecipes();
    setIsFetch(true);
  }, [isFetch, userToken]);

  return (
    <Container>
      <Title>Popular recipe</Title>
      {recipes ? (
        <List>
          {recipes.map(recipe => (
            <Item key={recipe.id}>
              <Hyperlink to={'/main/recipe/' + recipe.id}>
                <Image src={recipe.thumb} alt="Recipe preview"></Image>
                <div>
                  <Name>{recipe.title}</Name>
                  <Description>{recipe.description}</Description>
                </div>
              </Hyperlink>
            </Item>
          ))}
        </List>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default PopularRecipe;
