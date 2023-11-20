import styled from 'styled-components';
import { devices } from 'const/breakpoints';

export const Section = styled.section`
  padding: 68px 16px;
  display: flex;
  justify-content: center;
  @media only screen and ${devices.tablet} {
    padding: 77px 16px;
  }

  @media only screen and ${devices.desktop} {
    padding: 115px 16px;
  }
`;

export const Container = styled.div`
  width: 100%;

  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
    max-width: 1280px;
  }
`;
