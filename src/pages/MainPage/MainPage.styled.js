import styled from 'styled-components';
import { devices } from 'const/breakpoints';
import background from '../../images/main-page/bg-right-mobile.svg';
import backgroundDesktop from '../../images/main-page/bg-right-desktop.svg';
import leftLeaves from '../../images/main-page/main-left-top-leaves-mobile.png';
import leftLeavesTablet from '../../images/main-page/main-left-top-leaves-tablet.png';
import leftLeavesDesktop from '../../images/main-page/main-left-top-leaves-tablet.png';
import rightTop from '../../images/main-page/main-right-top-leaves-mobile.png';
import rightTopTablet from '../../images/main-page/main-right-top-leaves-tablet.png';
import rightTopDesktop from '../../images/main-page/main-right-top-leaves-desktop.png';
import bottomleaves from '../../images/leaves-bottom-mobile.png';
import bottomleaves2x from '../../images/leaves-bottom-mobile@2x.png';
import bottomleaves3x from '../../images/leaves-bottom-mobile@3x.png';
import bottomleavesTablet from '../../images/leaves-bottom-tablet.png';
import bottomleavesTablet2x from '../../images/leaves-bottom-tablet@2x.png';
import bottomleavesTablet3x from '../../images/leaves-bottom-tablet@3x.png';

export const SectionHero = styled.section`
  padding: 124px 16px 134px 16px;
  background-image: url(${rightTop}), url(${background}), url(${leftLeaves});
  background-size: 100%, 74%, 10%;
  background-repeat: no-repeat;
  background-position: right bottom -50px, bottom -30px right, top 30px left;
  display: flex;
  justify-content: center;
  @media only screen and ${devices.tablet} {
    padding: 155px 16px 195px 16px;
    background-image: url(${rightTopTablet}), url(${background}),
      url(${leftLeavesTablet});
    background-size: 75%, 40%, 8%;
    background-position: right bottom 70px, bottom right, top 5% left;
  }

  @media only screen and ${devices.desktop} {
    padding: 122px 16px 230px 16px;
    background-image: url(${rightTopDesktop}), url(${backgroundDesktop}),
      url(${leftLeavesDesktop});
    background-size: 65%, 50%, 5%;
    background-position: right bottom 50px, top right, top -50px left;
  }
`;

export const SectionCategories = styled.section`
  background-image: url(${bottomleaves});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position-y: 118%;
  padding: 0 16px 100px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bottomleaves2x});
  }
  @media (min-device-pixel-ratio: 3),
    (min-resolution: 268dpi),
    (min-resolution: 3dppx) {
    background-image: url(${bottomleaves3x});
  }
  @media only screen and ${devices.tablet} {
    background-size: 452px;
    background-position: bottom -20% left;
    padding: 0 16px 100px 16px;
    background-image: url(${bottomleavesTablet});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bottomleavesTablet2x});
    }
    @media (min-device-pixel-ratio: 3),
      (min-resolution: 268dpi),
      (min-resolution: 3dppx) {
      background-image: url(${bottomleavesTablet3x});
    }
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and ${devices.tablet} {
    max-width: 768px;
  }

  @media only screen and ${devices.desktop} {
    max-width: 1280px;
  }
`;

export const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media only screen and ${devices.tablet} {
    flex-direction: row;
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media only screen and ${devices.tablet} {
    margin-right: 10px;
  }

  @media only screen and ${devices.desktop} {
    align-items: flex-start;
    margin-right: 70px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: #22252a;
  font-size: 60px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.3px;
  margin: 0 0 14px 0;
  @media only screen and ${devices.tablet} {
    font-size: 72px;
    letter-spacing: -0.36px;
    margin: 0 0 24px 0;
  }

  @media only screen and ${devices.desktop} {
    font-size: 100px;
    letter-spacing: -0.5px;
    margin: 0 0 14px 0;
  }
`;

export const TitleGreen = styled.span`
  color: #8baa36;
`;

export const Description = styled.p`
  text-align: center;
  color: #23262a;
  max-width: 248px;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.28px;
  margin: 0 0 44px 0;

  @media only screen and ${devices.tablet} {
    text-align: start;
    max-width: 362px;
    margin: 0 0 32px 0;
  }

  @media only screen and ${devices.desktop} {
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.36px;
    max-width: 465px;
  }
`;

export const Image = styled.img`
  margin-bottom: 24px;

  @media only screen and ${devices.tablet} {
    margin-bottom: 0;
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Button = styled.button`
  color: 22252A;
  background-color: #fafafa;
  border-radius: 24px 44px;
  border: 2px solid #8baa36;
  padding: 14px 32px;
  max-width: 195px;
  font-size: 14px;
  line-height: normal;
  transition: 250ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  transition-property: color, background-color;
  cursor: pointer;
  &:is(:hover, :focus) {
    color: #fafafa;
    background-color: #8baa36;
  }
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;
