import styled from 'styled-components';
import { devices } from 'const/breakpoints';
import backgroundMobile from '../../images/start-background-mobile.png';
import backgroundMobile2x from '../../images/start-background-mobile@2x.png';
import backgroundMobile3x from '../../images/start-background-mobile@3x.png';
import backgroundTablet from '../../images/start-background-tablet.png';
import backgroundTablet2x from '../../images/start-background-tablet@2x.png';
import backgroundTablet3x from '../../images/start-background-tablet@3x.png';
import backgroundDesktop from '../../images/start-background-desktop.png';
import backgroundDesktop2x from '../../images/start-background-desktop@2x.png';
import backgroundDesktop3x from '../../images/start-background-desktop@3x.png';
import { ReactComponent as LogoSvg } from '../../images/logo-mobile.svg';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  background-image: url(${backgroundMobile});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: relative;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${backgroundMobile2x});
  }
  @media (min-device-pixel-ratio: 3),
    (min-resolution: 268dpi),
    (min-resolution: 3dppx) {
    background-image: url(${backgroundMobile3x});
  }

  @media only screen and ${devices.tablet} {
    background-image: url(${backgroundTablet});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${backgroundTablet2x});
    }
    @media (min-device-pixel-ratio: 3),
      (min-resolution: 268dpi),
      (min-resolution: 3dppx) {
      background-image: url(${backgroundTablet3x});
    }
  }

  @media only screen and ${devices.desktop} {
    background-image: url(${backgroundDesktop});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${backgroundDesktop2x});
    }
    @media (min-device-pixel-ratio: 3),
      (min-resolution: 268dpi),
      (min-resolution: 3dppx) {
      background-image: url(${backgroundDesktop3x});
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Logo = styled(LogoSvg)`
  width: 54px;
  height: 54px;
  margin-bottom: 28px;

  @media only screen and ${devices.tablet} {
    width: 68px;
    height: 68px;
    margin-bottom: 44px;
  }
`;

export const Title = styled.p`
  color: #fafafa;
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.48px;
  margin: 0 0 14px 0;

  @media only screen and ${devices.tablet} {
    font-size: 28px;
    letter-spacing: -0.56px;
  }
`;

export const Description = styled.p`
  color: #fafafa;
  max-width: 305px;
  margin: 0;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.28px;
  margin-bottom: 56px;

  @media only screen and ${devices.tablet} {
    max-width: 505px;
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.36px;
    margin-bottom: 52px;
  }
`;

export const Register = styled(Link)`
  padding: 12px 24px;
  margin-right: 12px;
  background-color: #8baa36;
  border-radius: 24px 44px;
  color: #fafafa;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: background-color;

  &:is(:hover, :focus-visible) {
    background-color: #22252a;
  }

  @media only screen and ${devices.tablet} {
    padding: 22px 44px;
    margin-right: 18px;
    font-size: 16px;
  }
`;

export const Login = styled(Link)`
  padding: 12px 24px;
  background-color: transparent;
  border-radius: 24px 44px;
  border: 2px solid #fafafa;
  color: #fafafa;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: color, border;

  &:is(:hover, :focus-visible) {
    color: #8baa36;
    border-color: #8baa36;
  }

  @media only screen and ${devices.tablet} {
    padding: 22px 44px;
    font-size: 16px;
  }
`;
