import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { devices } from 'const/breakpoints';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media only screen and ${devices.tablet} {
    margin-right: 50px;
  }

  @media only screen and ${devices.desktop} {
    margin-right: 0;
  }
`;

export const UserAvatar = styled.div`
  height: 34px;
  width: 34px;
  border-radius: 50%;
  background-color: rgba(217, 217, 217, 1);
  @media only screen and ${devices.tablet} {
    height: 44px;
    width: 44px;
  }
`;

export const UserName = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  color: #22252a;
  margin: 0;
  margin-left: 14px;
  transition-property: color;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:is(:hover, :focus) {
    color: #8baa36;
  }
  @media only screen and ${devices.tablet} {
    font-size: 14px;
    line-height: 1.7;
  }
`;
