import styled from 'styled-components';
import { devices } from 'const/breakpoints';

export const Container = styled.div`
  width: 100%;
  min-height: 73.5px;
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-bottom: 50px;
  @media only screen and ${devices.tablet} {
    margin-bottom: 100px;
    height: 86px;
    max-width: 768;
  }

  @media only screen and ${devices.desktop} {
    max-width: 1280px;
    gap: 60px;
  }
`;

export const Dot1 = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 3px;
  background-color: #8baa36;
  transform: rotate(-25deg);
  position: absolute;
  top: 0;
  left: 31%;

  @media only screen and ${devices.tablet} {
    width: 14px;
    height: 14px;
    left: 20%;
  }
`;

export const Dot2 = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 3px;
  background-color: #8baa36;
  transform: rotate(-25deg);
  position: absolute;
  top: 30%;
  right: 0;

  @media only screen and ${devices.tablet} {
    width: 14px;
    height: 14px;
  }
`;

export const Dot3 = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: #22252a;
  transform: rotate(-25deg);
  position: absolute;
  bottom: 0;
  right: 32%;

  @media only screen and ${devices.tablet} {
    width: 12px;
    height: 12px;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.56px;
  margin: 0;

  @media only screen and ${devices.tablet} {
    font-size: 32px;
    letter-spacing: -0.64px;
  }

  @media only screen and ${devices.desktop} {
    font-size: 44px;
    letter-spacing: -0.88px;
  }
`;
