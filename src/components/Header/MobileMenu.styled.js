import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { devices } from 'const/breakpoints';
import { ReactComponent as MagnifyingGlass } from '../../images/Header/MagnifyingGlass.svg';
import { ReactComponent as CrossIcon } from '../../images/Header/CrossIcon.svg';
import { ReactComponent as Logo } from '../../images/logo-mobile.svg';
import mobile1x from '../../images/Header/mobilemenu-background-mobile.png';
import mobile2x from '../../images/Header/mobilemenu-background-mobile@2x.png';
import mobile3x from '../../images/Header/mobilemenu-background-mobile@3x.png';

export const Container = styled.div`
  padding: 16px;
  width: 100%;
  height: 100vh;
  background-color: #ebf3d4;
  background-image: url(${mobile1x});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 999;
  left: 0;
  bottom: 0;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${mobile2x});
  }
  @media (min-device-pixel-ratio: 3),
    (min-resolution: 268dpi),
    (min-resolution: 3dppx) {
    background-image: url(${mobile3x});
  }
  @media only screen and ${devices.tablet} {
  }
`;

export const List = styled.ul`
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Item = styled.ul`
  &:not(:last-child) {
    margin-bottom: 32px;
  }
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const NavLink = styled(Link)`
  color: #22252a;
  font-size: 18px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.36px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:is(:hover, :focus) {
    color: #8baa36;
  }
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;
export const Search = styled(MagnifyingGlass)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  @media only screen and ${devices.tablet} {
    width: 24px;
    height: 24px;
  }
`;

export const CloseIcon = styled(CrossIcon)`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 20px;
  right: 16px;
`;

export const HeaderLogo = styled(Logo)`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 16px;
  top: 16px;
  @media only screen and ${devices.tablet} {
    width: 44px;
    height: 44px;
  }
`;
