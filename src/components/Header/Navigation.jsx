import { List, Item, NavLink, Search } from './Navigation.styled';

const Navigation = () => {
  return (
    <>
      <List>
        <Item>
          <NavLink to={'/main/categories'}>Categories</NavLink>
        </Item>
        <Item>
          <NavLink to={'/main/ownRecipes/add'}>Add recipe</NavLink>
        </Item>
        <Item>
          <NavLink to={'/main/ownRecipes/my'}>My recipes</NavLink>
        </Item>
        <Item>
          <NavLink to={'/main/favorites'}>Favorites</NavLink>
        </Item>
        <Item>
          <NavLink>Shopping list</NavLink>
        </Item>
        <Item>
          <NavLink to={'/main/search'}>
            <Search />
          </NavLink>
        </Item>
      </List>
    </>
  );
};

export default Navigation;
