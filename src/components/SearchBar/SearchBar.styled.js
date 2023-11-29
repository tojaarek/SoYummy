import styled from 'styled-components';
import { devices } from 'const/breakpoints';

export const Form = styled.form`
  display: flex;
  position: relative;
  width: 295px;
  @media only screen and ${devices.tablet} {
    width: 360px;
  }

  @media only screen and ${devices.desktop} {
    width: 510px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 17px 32px;
  border-radius: 24px 44px;
  border: none;
  color: #23262a;
  font-size: 12px;
  outline: none;

  &::placeholder {
    color: #23262aa;
  }
  @media only screen and ${devices.tablet} {
    padding: 18px 38px;
    font-size: 16px;
  }

  @media only screen and ${devices.desktop} {
    padding: 23px 48px;
  }
`;

export const Button = styled.button`
  padding: 15px 32px;
  border-radius: 24px 44px;
  border: none;
  background-color: #22252a;
  color: #fafafa;
  font-size: 14px;
  position: absolute;
  z-index: 2;
  right: 0;
  cursor: pointer;
  transition-property: background-color, color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:is(:hover, :focus) {
    background-color: #8baa36;
    color: #fafafa;
  }
  @media only screen and ${devices.tablet} {
    padding: 18px 52px;
    font-size: 16px;
  }

  @media only screen and ${devices.desktop} {
    padding: 23px 52px;
  }
`;
