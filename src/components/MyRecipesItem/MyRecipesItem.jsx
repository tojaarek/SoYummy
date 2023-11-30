import {
  Item,
  Img,
  Wrapper,
  TitleWrapper,
  Title,
  Description,
  Time,
  RecipeLink,
  Delete,
  TrashIcon,
} from './MyRecipesItem.styled';
import cutText from 'const/cutText';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { deleteUserRecipe } from 'redux/actions/recipes.actions';

const MyRecipesItem = ({ recipe }) => {
  const dispatch = useDispatch();

  const { _id, title, description, thumb, time } = recipe;

  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  const cuttedDescriptionLimit = isTablet ? 300 : isDesktop ? 500 : 153;
  const cuttedTitleLimit = isTablet ? 26 : isDesktop ? 54 : 19;

  const cuttedDescription = cutText(description, cuttedDescriptionLimit);
  const cuttedTitle = cutText(title, cuttedTitleLimit);

  const handleDelete = recipeId => {
    dispatch(deleteUserRecipe(recipeId));
  };

  return (
    <Item>
      <Img src={thumb} alt={title}></Img>
      <Wrapper>
        <TitleWrapper>
          <Title>{cuttedTitle}</Title>
          <Delete onClick={() => handleDelete(_id)}>
            <TrashIcon />
          </Delete>
        </TitleWrapper>
        <Description>{cuttedDescription}</Description>
        <Time>{time}</Time>
        <RecipeLink to={`/main/recipe/${_id}`}>See recipe</RecipeLink>
      </Wrapper>
    </Item>
  );
};

export default MyRecipesItem;
