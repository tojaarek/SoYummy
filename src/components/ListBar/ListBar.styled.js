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
    margin-bottom: 50px;
    padding: 20px;
  }
`;

export const Position = styled.p`
  color: #fafafa;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  margin: ${props => (props.$isProduct ? '0 40px 0 0' : '0')};
  @media only screen and ${devices.tablet} {
    font-size: 18px;
    line-height: normal;
    letter-spacing: 0.54px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;
