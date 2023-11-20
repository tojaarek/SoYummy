import BurgerMenu2 from './BurgerMenu2';
import { useState, useEffect } from 'react';
import {
  Header,
  Container,
  HeaderLogo,
  Wrapper,
  NavLink,
} from './Header.styled';
import HeaderUser2 from './HeaderUser2';
import Navigation from './Navigation';

const Header2 = () => {
  const [bgColor, setBgColor] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 20) {
        setBgColor('#fafafa');
      } else {
        setBgColor('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Header $bgColor={bgColor}>
      <Container>
        <NavLink to={'/'}>
          <HeaderLogo />
        </NavLink>
        <Navigation />
        <Wrapper>
          <HeaderUser2 />
          <BurgerMenu2 />
        </Wrapper>
      </Container>
    </Header>
  );
};

export default Header2;
