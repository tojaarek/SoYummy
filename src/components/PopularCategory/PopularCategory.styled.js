import styled from 'styled-components';
import { devices } from 'const/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: #001833;
  font-size: 28px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.56px;
  margin: 0 0 32px 0;
  @media only screen and ${devices.tablet} {
    font-size: 44px;
    letter-spacing: -0.88px;
    margin: 0 0 40px 0;
  }

  @media only screen and ${devices.desktop} {
    margin: 0 0 50px 0;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-bottom: 24px;
  @media only screen and ${devices.tablet} {
    margin-bottom: 40px;
  }

  @media only screen and ${devices.desktop} {
    margin-bottom: 50px;
  }
`;

export const Button = styled.button`
  padding: 10px 24px;
  width: 94px;
  height: 38px;
  border-radius: 6px;
  border: none;
  background: #8aa936;
  cursor: pointer;
  color: #fafafa;
  font-size: 14px;
  line-height: 1.28;
  align-self: flex-end;

  transition-property: color, background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:is(:hover, :focus) {
    background-color: #22252a;
    color: #fafafa;
  }
`;
