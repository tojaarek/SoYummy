import { useSelector } from 'react-redux';
import { selectTOwnRecipesTotalPages } from 'redux/selectors/recipes.selectors';
import {
  Container,
  PagesList,
  PagesItem,
  Right,
  Left,
  Button,
} from './Pagination.styled';

const Pagination = ({ onPageChange, page }) => {
  const totalPages = useSelector(selectTOwnRecipesTotalPages);

  const handlePreviousClick = () => {
    if (page > 1) {
      onPageChange(page - 1);
    } else {
      onPageChange(1);
    }
  };

  const handleNextClick = () => {
    if (page < totalPages) {
      onPageChange(page + 1);
    }
  };

  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      const isActive = i === page;

      pages.push(
        <PagesItem
          key={i}
          to={`?page=${i}`}
          isActive={isActive}
          onClick={() => onPageChange(i)}
        >
          {i}
        </PagesItem>
      );
    }
    return pages;
  };

  return (
    <Container>
      <Button to={`?page=${Math.max(page - 1, 1)}`}>
        <Left onClick={handlePreviousClick} />
      </Button>
      <PagesList>{renderPages()}</PagesList>
      <Button to={`?page=${Math.min(page + 1, totalPages)}`}>
        <Right onClick={handleNextClick} />
      </Button>
    </Container>
  );
};

export default Pagination;
