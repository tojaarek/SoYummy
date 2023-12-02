import styled from 'styled-components';
import { devices } from 'const/breakpoints';
import { ReactComponent as RemoveIcon } from '../../images/remove-icon.svg';

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding-bottom: 44px;
  border-bottom: 1px solid #e0e0e0;

  &:not(:last-child) {
    margin-bottom: 44px;
  }
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const ImageBox = styled.div`
  width: 60px;
  height: 60px;
  padding: 6px;
  border-radius: 6px;
  background-color: #ebf3d4;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  @media only screen and ${devices.tablet} {
    width: 93px;
    height: 93px;
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Image = styled.img`
  width: 48px;
  height: 48px;
  @media only screen and ${devices.tablet} {
    width: 81px;
    height: 81px;
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Title = styled.p`
  color: #3e4462;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
  @media only screen and ${devices.tablet} {
    font-size: 16px;
    line-height: 1.5;
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Amount = styled.p`
  color: #fafafa;
  font-size: 10px;
  font-weight: 600;
  line-height: normal;
  margin: 0 58px 0 0;
  padding: 4px 14px;
  border-radius: 4px;
  background-color: #8baa36;
  height: fit-content;
  @media only screen and ${devices.tablet} {
    margin: 0 70px 0 0;
    font-size: 18px;
    padding: 4px 28px;
  }
`;

export const Remove = styled(RemoveIcon)`
  margin-right: 28px;
  @media only screen and ${devices.tablet} {
    margin-right: 48px;
    width: 20px;
    height: 20px;
  }
`;

export const ProductBox = styled.div`
  display: flex;
  max-width: 135px;
  @media only screen and ${devices.tablet} {
    max-width: 300px;
  }
`;

export const AmountBox = styled.div`
  display: flex;
`;
