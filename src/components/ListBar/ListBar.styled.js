import styled from 'styled-components';
import { devices } from 'const/breakpoints';

export const Container = styled.div`
  padding: 10px;
  border-radius: 8px;
  background-color: #8baa36;
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Position = styled.p`
  color: #fafafa;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  margin: ${props => (props.$isProduct ? '0 100px 0 0' : '0')};
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;
