import styled from 'styled-components';
import { devices } from 'const/breakpoints';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(343px, 1fr));
  grid-gap: 14px;
  row-gap: 50px;

  @media only screen and ${devices.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(352px, 1fr));
    grid-gap: 32px;
    row-gap: 32px;
  }

  @media only screen and ${devices.desktop} {
    grid-template-columns: repeat(4, 309.5px);
    grid-gap: 14px;
    row-gap: 50px;
  }
`;
