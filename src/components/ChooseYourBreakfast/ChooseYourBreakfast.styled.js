import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { devices } from 'const/breakpoints';

export const Container = styled.div`
  text-align: end;
  background-color: #fafafa;
  border-radius: 8px;
  padding: 8px;
  color: #3e4462;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.24px;
  max-width: 225px;
  position: absolute;
  bottom: 91px;
  right: 15px;
  & p {
    text-align: start;
    margin: 0 0 7px 0;
  }
  & span {
    color: #8baa36;
  }
  @media only screen and ${devices.tablet} {
    font-size: 14px;
    line-height: 1.28;
    padding: 12px;
    max-width: 260px;
    bottom: 40px;
  }

  @media only screen and ${devices.desktop} {
    padding: 16px;
    max-width: 300px;
    bottom: 100px;
    right: 60px;
  }
`;

export const Button = styled(Link)`
  color: #3e4462;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.2px;
  @media only screen and ${devices.desktop} {
    font-size: 12px;
  }
`;
