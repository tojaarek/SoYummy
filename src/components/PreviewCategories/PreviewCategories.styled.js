import styled from 'styled-components';
import { devices } from 'const/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 40px;
  @media only screen and ${devices.tablet} {
    max-width: 768px;
    gap: 50px;
  }

  @media only screen and ${devices.desktop} {
    max-width: 1280px;
    gap: 60px;
  }
`;
