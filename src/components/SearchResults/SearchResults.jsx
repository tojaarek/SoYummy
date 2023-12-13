import { List, RecipeBox, Title, Image } from './SearchResults.styled';
import cutText from 'const/cutText';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NoResults from 'components/NoResults/NoResults';

export const SearchResults = ({ results }) => {
  const navigate = useNavigate();

  useEffect(() => {}, [results]);

  if (results === null) {
    return null;
  }

  if (Array.isArray(results) && results.length === 0) {
    return <NoResults />;
  }

  return (
    <List>
      {Array.isArray(results) &&
        results.map(recipe => (
          <RecipeBox
            key={recipe.id}
            onClick={() => navigate('/main/recipe/' + recipe.id)}
          >
            <Title>{cutText(recipe.title, 26)}</Title>
            <Image src={recipe.thumb} alt={recipe.title} />
          </RecipeBox>
        ))}
    </List>
  );
};

export default SearchResults;
