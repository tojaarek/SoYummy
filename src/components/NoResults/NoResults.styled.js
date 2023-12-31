import styled from 'styled-components';
import { devices } from 'const/breakpoints';

export const Item = styled.li`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  @media only screen and ${devices.tablet} {
    margin-top: 100px;
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Info = styled.p`
  font-size: 16px;

  & span {
    font-family: 'Arial';
    display: inline;
    margin-left: 12px;
  }
  @media only screen and ${devices.tablet} {
    font-size: 21px;
  }
`;
