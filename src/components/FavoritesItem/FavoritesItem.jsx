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
} from './FavoritesItem.styled';
import cutText from 'const/cutText';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { deleteFromFavorites } from 'redux/actions/favorites.actions';

const FavoritesItem = ({ recipe }) => {
  const dispatch = useDispatch();

  const { id, title, description, thumb, time } = recipe;

  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  const cuttedDescriptionLimit = isTablet ? 300 : isDesktop ? 500 : 153;
  const cuttedTitleLimit = isTablet ? 26 : isDesktop ? 54 : 19;

  const cuttedDescription = cutText(description, cuttedDescriptionLimit);
  const cuttedTitle = cutText(title, cuttedTitleLimit);

  const handleDelete = id => {
    dispatch(deleteFromFavorites({ recipeId: id }));
  };

  return (
    <Item>
      <Img src={thumb} alt={title}></Img>
      <Wrapper>
        <TitleWrapper>
          <Title>{cuttedTitle}</Title>
          <Delete onClick={() => handleDelete(id)}>
            <TrashIcon />
          </Delete>
        </TitleWrapper>
        <Description>{cuttedDescription}</Description>
        <Time>{time}</Time>
        <RecipeLink to={`/recipe/${id}`}>See recipe</RecipeLink>
      </Wrapper>
    </Item>
  );
};

export default FavoritesItem;
