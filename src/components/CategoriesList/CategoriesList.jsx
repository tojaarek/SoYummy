import { useSelector } from 'react-redux';
import { List, Link } from './CategoriesList.styled';
import { selectCategoriesList } from 'redux/selectors/recipes.selectors';

const CategoriesList = () => {
  const categories = useSelector(selectCategoriesList);

  return (
    <List>
      {categories.map((category, index) => (
        <Link key={index} to={`/main/categories/${category.name}`}>
          {category.name}
        </Link>
      ))}
    </List>
  );
};

export default CategoriesList;
