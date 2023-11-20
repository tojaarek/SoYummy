import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { devices } from 'const/breakpoints';
import { ReactComponent as BurgerIcon } from '../../images/Header/BurgerIcon.svg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
    display: none;
  }
`;

export const MenuIcon = styled(BurgerIcon)`
  width: 32px;
  height: 32px;
  @media only screen and ${devices.tablet} {
    width: 32px;
    height: 32px;
  }
`;
