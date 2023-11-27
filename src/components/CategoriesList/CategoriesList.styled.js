import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { devices } from 'const/breakpoints';

export const List = styled.div`
  padding: 0 29px 32px 29px;
  margin-bottom: 32px;
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  display: flex;
  &::-webkit-scrollbar {
    display: none;
  }
  @media only screen and ${devices.tablet} {
    padding: 0 28px 30px 28px;
    margin-bottom: 50px;
  }
`;

export const Link = styled(NavLink)`
  color: #e0e0e0;
  font-size: 14px;
  line-height: 1;
  text-decoration: none;
  position: relative;

  &.active {
    color: #8baa36;

    &::after {
      content: '';
      width: 100%;
      height: 2px;
      background-color: #8baa36;
      border-radius: 0;
      position: absolute;
      z-index: 20;
      bottom: -32px;
      left: 0;
      margin: 0;
      padding: 0;
    }
  }

  &:not(:last-child) {
    margin-right: 28px;
  }
  @media only screen and ${devices.tablet} {
    font-size: 18px;

    &.active {
      &::after {
        content: '';
        width: 100%;
        height: 2px;
        background-color: #8baa36;
        border-radius: 0;
        position: absolute;
        z-index: 20;
        bottom: -30px;
        left: 0;
        margin: 0;
        padding: 0;
      }
    }

    &:not(:last-child) {
      margin-right: 48px;
    }
  }
`;
