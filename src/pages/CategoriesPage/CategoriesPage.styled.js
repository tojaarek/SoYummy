import styled from 'styled-components';
import { devices } from 'const/breakpoints';
import backgroundMobile from '../../images/leaves-bottom-mobile.png';
import backgroundMobile2x from '../../images/leaves-bottom-mobile@2x.png';
import backgroundMobile3x from '../../images/leaves-bottom-mobile@3x.png';

export const Section = styled.section`
  padding: 68px 16px;
  background-image: url(${backgroundMobile});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: 1580px;

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
    padding: 77px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and ${devices.desktop} {
    padding: 115px 16px;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin-bottom: 100px;
  position: relative;

  @media only screen and ${devices.tablet} {
    max-width: 768px;
  }

  @media only screen and ${devices.desktop} {
    max-width: 1280px;
  }
`;
