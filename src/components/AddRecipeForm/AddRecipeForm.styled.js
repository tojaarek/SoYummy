import styled from 'styled-components';
import { devices } from 'const/breakpoints';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Button = styled.button`
  padding: 12px 48px;
  margin-bottom: 72px;
  background-color: #22252a;
  border-radius: 24px 44px;
  border: none;
  color: #fafafa;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: background-color;
  cursor: pointer;

  &:is(:hover, :focus-visible) {
    background-color: #8baa36;
  }
  @media only screen and ${devices.tablet} {
    padding: 14px 64px;
    font-size: 16px;
  }
`;
