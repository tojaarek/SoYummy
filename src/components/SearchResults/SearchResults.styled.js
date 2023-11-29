import styled from 'styled-components';
import { devices } from 'const/breakpoints';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(343px, 1fr));
  grid-gap: 32px;
  margin-top: 50px;
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

export const RecipeBox = styled.li`
  max-width: 400px;
  max-height: 400px;
  position: relative;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const Title = styled.div`
  position: absolute;
  bottom: 26px;
  left: 50%;
  transform: translate(-50%);
  max-width: 314px;
  padding: 16px;
  background-color: #fff;
  color: #3e4462;
  width: 307px;
  height: 52px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.24px;

  @media only screen and ${devices.desktop} {
    max-width: 268px;
  }
`;
