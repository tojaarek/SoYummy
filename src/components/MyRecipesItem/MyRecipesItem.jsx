import {
  Item,
  Img,
  Wrapper,
  Title,
  Description,
  Time,
  Button,
} from './MyRecipesItem.styled';
const MyRecipesItem = ({ recipe }) => {
  const { _id, title, description, thumb, time } = recipe;

  const cutDescription = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + '...';
    }
    return title;
  };

  const cuttedDescription = cutDescription(description, 165);

  return (
    <Item>
      <Img src={thumb} alt={title}></Img>
      <Wrapper>
        <Title>{title}</Title>
        <Description>{cuttedDescription}</Description>
        <Time>{time}</Time>
        <Button to={`/recipe/${_id}`}>See recipe</Button>
      </Wrapper>
    </Item>
  );
};

export default MyRecipesItem;
