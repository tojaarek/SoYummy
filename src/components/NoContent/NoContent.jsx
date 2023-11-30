import { Button } from 'pages/MainPage/MainPage.styled';
import { Info, Item } from './NoContent.styled';
import { useNavigate } from 'react-router-dom';

const NoContent = ({ contents, buttonText, goTo }) => {
  const navigate = useNavigate();
  return (
    <Item>
      <Info>{contents}</Info>
      <Button onClick={() => navigate(`${goTo}`)}>{buttonText}</Button>
    </Item>
  );
};

export default NoContent;
