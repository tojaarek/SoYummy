import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { devices } from 'const/breakpoints';
import { ReactComponent as MagnifyingGlass } from '../../images/Header/MagnifyingGlass.svg';

export const List = styled.ul`
  display: none;

  @media only screen and ${devices.desktop} {
    display: flex;
    align-items: center;
  }
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export const NavLink = styled(Link)`
  color: #23262a;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
  text-decoration: none;
  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:is(:hover, :focus) {
    color: #8baa36;
  }
`;
export const Search = styled(MagnifyingGlass)`
  width: 18px;
  height: 18px;

  @media only screen and ${devices.tablet} {
    width: 24px;
    height: 24px;
    left: 18px;
  }
`;
