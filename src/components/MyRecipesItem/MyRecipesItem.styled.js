import styled from 'styled-components';
import { devices } from 'const/breakpoints';
import { Link } from 'react-router-dom';
import { ReactComponent as Trash } from '../../images/trash-icon.svg';

export const Item = styled.li`
  padding: 14px 9px;
  border-radius: 8px;
  background: #fff;
  display: flex;

  &:not(:last-child) {
    margin-bottom: 18px;
  }
  @media only screen and ${devices.tablet} {
    padding: 28px 24px;

    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }

  @media only screen and ${devices.desktop} {
    padding: 40px;
    &:not(:last-child) {
      margin-bottom: 50px;
    }
  }
`;

export const Img = styled.img`
  width: 124px;
  height: 124px;
  border-radius: 8px;
  margin-right: 14px;
  @media only screen and ${devices.tablet} {
    width: 232px;
    height: 232px;
    margin-right: 24px;
  }

  @media only screen and ${devices.desktop} {
    width: 324px;
    height: 324px;
    margin-right: 54px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 14px 0;

  @media only screen and ${devices.desktop} {
    margin: 0 0 18px 0;
  }
`;

export const Title = styled.h2`
  color: #3e4462;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.24px;
  margin: 0;

  @media only screen and ${devices.tablet} {
    font-size: 24px;
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
    font-size: 14px;
    letter-spacing: -0.28px;
    line-height: 1.28;
    max-width: 350px;
  }

  @media only screen and ${devices.desktop} {
    font-size: 18px;
    letter-spacing: -0.36px;
    line-height: 1.33;
    max-width: 760px;
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
    font-size: 14px;
  }

  @media only screen and ${devices.desktop} {
    font-size: 16px;
  }
`;

export const RecipeLink = styled(Link)`
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
  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:is(:hover, :focus) {
    background-color: #22252a;
  }
  @media only screen and ${devices.tablet} {
    font-size: 14px;
    padding: 12px 32px;
  }
  @media only screen and ${devices.desktop} {
    font-size: 16px;
    padding: 18px 44px;
  }
`;

export const Delete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: #8baa36;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:is(:hover, :focus) {
    background-color: #22252a;
  }
  @media only screen and ${devices.tablet} {
    width: 38px;
    height: 38px;
  }

  @media only screen and ${devices.desktop} {
    width: 44px;
    height: 44px;
  }
`;

export const TrashIcon = styled(Trash)`
  width: 14px;
  height: 14px;

  @media only screen and ${devices.tablet} {
    width: 22px;
    height: 22px;
  }
  @media only screen and ${devices.desktop} {
    width: 24px;
    height: 24px;
  }
`;
