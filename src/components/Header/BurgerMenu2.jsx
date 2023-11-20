import { useState } from 'react';
import { Container, MenuIcon } from './BurgerMenu.styled';
import MobileMenu from './MobileMenu';

const BurgerMenu2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container>
      <MenuIcon onClick={toggleMenu} />
      {menuOpen && <MobileMenu closeMenu={toggleMenu} />}
    </Container>
  );
};

export default BurgerMenu2;
