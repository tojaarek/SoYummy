import styled from 'styled-components';
import { devices } from 'const/breakpoints';
import { ReactComponent as Image } from '../../images/error-page-image.svg';
import leavesMobile from '../../images/leaves-bottom-mobile.png';
import leavesMobile2x from '../../images/leaves-bottom-mobile@2x.png';
import leavesMobile3x from '../../images/leaves-bottom-mobile@3x.png';
import leavesTablet from '../../images/leaves-bottom-tablet.png';
import leavesTablet2x from '../../images/leaves-bottom-tablet@2x.png';
import leavesTablet3x from '../../images/leaves-bottom-tablet@3x.png';
import leavesDesktop from '../../images/leaves-bottom-desktop.png';
import leavesDesktop2x from '../../images/leaves-bottom-desktop@2x.png';
import leavesDesktop3x from '../../images/leaves-bottom-desktop@3x.png';

export const Section = styled.section`
  padding: 116px 16px 100px 16px;
  background-image: url(${leavesMobile});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: 240px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${leavesMobile2x});
  }
  @media (min-device-pixel-ratio: 3),
    (min-resolution: 268dpi),
    (min-resolution: 3dppx) {
    background-image: url(${leavesMobile3x});
  }

  @media only screen and ${devices.tablet} {
    padding: 156px 16px 0 16px;
    background-position-y: 350px;
    background-image: url(${leavesTablet});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${leavesTablet2x});
    }
    @media (min-device-pixel-ratio: 3),
      (min-resolution: 268dpi),
      (min-resolution: 3dppx) {
      background-image: url(${leavesTablet3x});
    }
  }

  @media only screen and ${devices.desktop} {
    padding: 160px 16px 200px 16px;
    background-position-y: 365px;
    background-image: url(${leavesDesktop});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${leavesDesktop2x});
    }
    @media (min-device-pixel-ratio: 3),
      (min-resolution: 268dpi),
      (min-resolution: 3dppx) {
      background-image: url(${leavesDesktop3x});
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Notice = styled.p`
  color: #000;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.11;
  letter-spacing: -0.36px;
  margin-top: 14px;
  margin-bottom: 8px;

  @media only screen and ${devices.tablet} {
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.48px;
    margin-top: 32px;
    margin-bottom: 14px;
  }
`;

export const Description = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.28px;
  margin: 0;
  opacity: 0.5;
  max-width: 206px;

  @media only screen and ${devices.tablet} {
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.36px;
    max-width: none;
  }
`;

export const ErrorImage = styled(Image)`
  width: 259px;
  height: 170px;

  @media only screen and ${devices.tablet} {
    width: 498px;
    height: 327px;
  }

  @media only screen and ${devices.desktop} {
    width: 498px;
    height: 331px;
  }
`;
