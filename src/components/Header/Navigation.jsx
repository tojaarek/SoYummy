import { List, Item, NavLink, Search } from './Navigation.styled';

const Navigation = () => {
  return (
    <>
      <List>
        <Item>
          <NavLink to={'/categories'}>Categories</NavLink>
        </Item>
        <Item>
          <NavLink to={'/ownRecipes/add'}>Add recipe</NavLink>
        </Item>
        <Item>
          <NavLink to={'/ownRecipes/my'}>My recipes</NavLink>
        </Item>
        <Item>
          <NavLink to={'/favorites'}>Favorites</NavLink>
        </Item>
        <Item>
          <NavLink>Shopping list</NavLink>
        </Item>
        <Item>
          <NavLink>
            <Search />
          </NavLink>
        </Item>
      </List>
    </>
  );
};

export default Navigation;
