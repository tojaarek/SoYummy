import styled from 'styled-components';
import { devices } from 'const/breakpoints';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
  cursor: pointer;

  &:is(:hover, :focus-visible) p {
    color: #8baa36;
  }
  @media only screen and ${devices.tablet} {
    margin-right: 50px;
  }

  @media only screen and ${devices.desktop} {
    margin-right: 0;
  }
`;

export const UserAvatar = styled.img`
  height: 34px;
  width: 34px;
  border-radius: 50%;
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

  @media only screen and ${devices.tablet} {
    font-size: 14px;
    line-height: 1.7;
  }
`;
