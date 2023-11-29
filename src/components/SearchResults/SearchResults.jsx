import { List, RecipeBox, Title, Image } from './SearchResults.styled';
import cutText from 'const/cutText';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchResults = ({ results }) => {
  const navigate = useNavigate();

  useEffect(() => {}, [results]);

  return (
    <List>
      {results.map(recipe => (
        <RecipeBox
          key={recipe.id}
          onClick={() => navigate('/recipe/' + recipe.id)}
        >
          <Title>{cutText(recipe.title, 26)}</Title>
          <Image src={recipe.thumb} alt={recipe.title} />
        </RecipeBox>
      ))}
    </List>
  );
};

export default SearchResults;
