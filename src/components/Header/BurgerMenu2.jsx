import { useEffect, useState } from 'react';
import { Container, MenuIcon } from './BurgerMenu.styled';
import MobileMenu from './MobileMenu';

const BurgerMenu2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <Container>
      <MenuIcon onClick={toggleMenu} />
      {menuOpen && <MobileMenu closeMenu={toggleMenu} />}
    </Container>
  );
};

export default BurgerMenu2;
