import {
  Container,
  List,
  Item,
  NavLink,
  Search,
  CloseIcon,
  HeaderLogo,
} from './MobileMenu.styled';

const MobileMenu = ({ closeMenu }) => {
  return (
    <Container>
      <HeaderLogo />
      <CloseIcon onClick={closeMenu} />
      <List>
        <Item>
          <NavLink to={'/main/categories'} onClick={closeMenu}>
            Categories
          </NavLink>
        </Item>
        <Item>
          <NavLink to={'/main/ownRecipes/add'} onClick={closeMenu}>
            Add recipe
          </NavLink>
        </Item>
        <Item>
          <NavLink to={'/main/ownRecipes/my'} onClick={closeMenu}>
            My recipes
          </NavLink>
        </Item>
        <Item>
          <NavLink to={'/main/favorites'} onClick={closeMenu}>
            Favorites
          </NavLink>
        </Item>
        <Item>
          <NavLink to={'/main/shopping-list'} onClick={closeMenu}>
            Shopping list
          </NavLink>
        </Item>
        <Item>
          <NavLink to={'/main/search'} onClick={closeMenu}>
            <Search /> Search
          </NavLink>
        </Item>
      </List>
    </Container>
  );
};

export default MobileMenu;
