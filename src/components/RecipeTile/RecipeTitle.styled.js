import styled from 'styled-components';
import { devices } from 'const/breakpoints';

export const RecipeBox = styled.li`
  max-width: 400px;
  max-height: 400px;
  position: relative;
  cursor: pointer;
  @media only screen and ${devices.tablet} {
    &:not(:last-child) {
      margin-right: 32px;
    }
  }

  @media only screen and ${devices.desktop} {
    &:not(:last-child) {
      margin-right: 14px;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
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
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
    max-width: 268px;
  }
`;
