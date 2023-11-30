import styled from 'styled-components';
import { devices } from 'const/breakpoints';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;

  @media only screen and ${devices.desktop} {
    max-width: 325px;
    position: absolute;
    top: 400px;
    right: 0;
  }
`;

export const Title = styled.p`
  color: #3e4462;
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.24px;
  margin: 0 0 32px 0;

  @media only screen and ${devices.tablet} {
    margin: 0 0 40px 0;
  }
`;

export const List = styled.ul`
  @media only screen and ${devices.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media only screen and ${devices.desktop} {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgba(112, 112, 112, 0.17);
  padding-bottom: 14px;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  @media only screen and ${devices.tablet} {
    max-width: 336px;
    display: flex;
    border-bottom: 1px solid rgba(112, 112, 112, 0.17);
    padding-bottom: 14px;

    &:not(:last-child) {
      margin-bottom: 0;
    }

    &:nth-child(1) {
      margin-right: 32px;
      margin-bottom: 32px;
    }

    &:nth-child(2) {
      margin-bottom: 32px;
    }

    &:nth-child(3) {
      margin-right: 32px;
    }
  }

  @media only screen and ${devices.desktop} {
    max-width: 336px;
    display: flex;
    border-bottom: 1px solid rgba(112, 112, 112, 0.17);
    padding-bottom: 14px;

    &:not(:last-child) {
      margin-bottom: 24px;
    }

    &:nth-child(1) {
      margin-right: 0;
      margin-bottom: 24px;
    }

    &:nth-child(2) {
      margin-bottom: 24px;
    }

    &:nth-child(3) {
      margin-right: 0;
    }
  }
`;

export const Image = styled.img`
  min-width: 95px;
  min-height: 85px;
  width: 104px;
  height: 85px;
  border-radius: 6px;
  margin-right: 12px;
`;

export const Name = styled.p`
  color: #3e4462;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.24px;
  margin: 0 0 2px 0;
`;

export const Description = styled.p`
  color: #7e7e7e;
  white-space: wrap;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.24px;
  padding-right: 14px;
  margin: 0;
`;

export const Hyperlink = styled(Link)`
  text-decoration: none;
  display: flex;
`;
