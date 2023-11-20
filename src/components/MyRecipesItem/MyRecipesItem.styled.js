import styled from 'styled-components';
import { devices } from 'const/breakpoints';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  padding: 14px 9px;
  border-radius: 8px;
  background: #fff;
  display: flex;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Img = styled.img`
  width: 124px;
  height: 124px;
  border-radius: 8px;
  margin-right: 14px;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Title = styled.h2`
  color: #3e4462;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.24px;
  margin: 0 0 14px 0;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Description = styled.p`
  color: #23262a;
  font-size: 10px;
  line-height: 1.25;
  letter-spacing: -0.16px;
  width: 100%;
  margin: 0;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Time = styled.p`
  color: #3e4462;
  font-size: 10px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.24px;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Button = styled(Link)`
  font-size: 10px;
  line-heioght: normal;
  padding: 6px 14px;
  align-self: flex-end;
  background-color: #8baa36;
  color: #fafafa;
  border-radius: 24px 44px;
  border: none;
  text-decoration: none;
  position: absolute;
  bottom: 0;
  right: 0;
  @media only screen and ${devices.tablet} {
  }
`;
