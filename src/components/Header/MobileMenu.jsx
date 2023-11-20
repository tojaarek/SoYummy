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
          <NavLink to={'/categories'}>Categories</NavLink>
        </Item>
        <Item>
          <NavLink to={'/ownRecipes/add'}>Add recipe</NavLink>
        </Item>
        <Item>
          <NavLink>My recipes</NavLink>
        </Item>
        <Item>
          <NavLink>Favorites</NavLink>
        </Item>
        <Item>
          <NavLink>Shopping list</NavLink>
        </Item>
        <Item>
          <NavLink>
            <Search /> Search
          </NavLink>
        </Item>
      </List>
    </Container>
  );
};

export default MobileMenu;
