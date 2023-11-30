import styled from 'styled-components';
import { devices } from 'const/breakpoints';

export const Item = styled.li`
  width: 100%;
  padding: 30px 0px;
  border-radius: 8px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Info = styled.p`
  font-size: 16px;
  margin: 0 0 50px 0;

  @media only screen and ${devices.desktop} {
  }
`;
