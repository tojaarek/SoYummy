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
  padding-bottom: 24px;
  border-bottom: 1px solid #e0e0e0;

  &:not(:last-child) {
    margin-bottom: 24px;
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
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Image = styled.img`
  width: 48px;
  height: 48px;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Title = styled.p`
  color: #3e4462;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Amount = styled.p`
  color: #fafafa;
  font-size: 10px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  padding: 4px 14px;
  border-radius: 4px;
  background-color: #8baa36;
  height: fit-content;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Remove = styled(RemoveIcon)`
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;
