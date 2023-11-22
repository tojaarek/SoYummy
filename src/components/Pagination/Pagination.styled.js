import styled from 'styled-components';
import { devices } from 'const/breakpoints';
import { NavLink, Link } from 'react-router-dom';
import { ReactComponent as RightIcon } from '../../images/Pagination/pagination-right.svg';
import { ReactComponent as LeftIcon } from '../../images/Pagination/pagination-left.svg';

export const Container = styled.div`
width: 100%
  max-width: 324px;
  border-radius: 26px;
  background: #fafafa;
  box-shadow: 0px 4px 4px 0px rgba(135, 135, 135, 0.2);
  padding: 10px 28px;
  display: flex;
  align-items: center;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const PagesList = styled.div`
  display: flex;
  align-items: center;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const PagesItem = styled(NavLink)`
  color: #656565;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  background-color: ${props => {
    if (props.isActive) return '#ebf3d4';
    return 'transparent';
  }};
  width: 27px;
  height: 27px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:not(:last-child) {
    margin-right: 14px;
  }

  &:is(:hover, :focus) {
    background-color: #ebf3d4;
  }
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Right = styled(RightIcon)`
width: 8px
height: 15px;
margin-left: 20px;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Left = styled(LeftIcon)`
width: 8px
height: 15px;
margin-right: 20px;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;
