import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { devices } from 'const/breakpoints';
import { ReactComponent as Logo } from '../../images/logo-mobile.svg';

export const Header = styled.header`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.$bgColor};
  position: fixed;
  z-index: 999;
  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media only screen and ${devices.tablet} {
    max-width: 768px;
  }

  @media only screen and ${devices.desktop} {
    max-width: 1280px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const HeaderLogo = styled(Logo)`
  width: 40px;
  height: 40px;
  @media only screen and ${devices.tablet} {
    width: 44px;
    height: 44px;
  }
`;

export const NavLink = styled(Link)`
  width: 40px;
  height: 40px;
  @media only screen and ${devices.tablet} {
    width: 44px;
    height: 44px;
  }
`;
