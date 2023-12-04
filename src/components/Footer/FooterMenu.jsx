import './Footer.styled.css';
import { Link } from 'react-router-dom';

export const FooterMenu = () => {
  return (
    <div className="MenuItems">
      <Link
        to={'/main/categories'}
        style={{ color: 'white', textDecoration: 'none' }}
      >
        <span className="Item">Categories</span>
      </Link>

      <Link
        to={'/main/ownRecipes/add'}
        style={{ color: 'white', textDecoration: 'none' }}
      >
        <span className="Item">Add recipes</span>
      </Link>

      <Link
        to={'/main/ownRecipes/my'}
        style={{ color: 'white', textDecoration: 'none' }}
      >
        <span className="Item">My recipes</span>
      </Link>

      <Link
        to={'/main/favorites'}
        style={{ color: 'white', textDecoration: 'none' }}
      >
        <span className="Item">Favorites</span>
      </Link>

      <Link
        to={'/main/shopping-list'}
        style={{ color: 'white', textDecoration: 'none' }}
      >
        <span className="Item">Shopping list</span>
      </Link>
    </div>
  );
};

export default FooterMenu;
