import styled from 'styled-components';
import { devices } from 'const/breakpoints';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
  &:is(:hover, :focus-visible) {
    background-color: #8baa36;
  }
  @media only screen and ${devices.tablet} {
    padding: 14px 64px;
    font-size: 16px;
  }
`;
