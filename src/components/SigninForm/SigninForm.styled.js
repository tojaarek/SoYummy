import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { devices } from 'const/breakpoints';
import { ReactComponent as EmailIcon } from '../../images/email-icon.svg';
import { ReactComponent as PasswordIcon } from '../../images/password-icon.svg';

export const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 221px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and ${devices.tablet} {
    top: 347px;
  }

  @media only screen and ${devices.desktop} {
    position: static;
    max-width: 500px;
  }
`;

export const Form = styled.form`
  padding: 32px 28px 40px 28px;
  margin-bottom: 12px;
  border-radius: 30px;
  background: #2a2c36;
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: start;

  @media only screen and ${devices.tablet} {
    padding: 44px 50px 44px 50px;
    margin-bottom: 18px;
    max-width: 500px;
  }
`;

export const FormHeadline = styled.h3`
  margin: 0 0 18px 0;
  color: #fafafa;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.16;
  letter-spacing: -0.48px;

  @media only screen and ${devices.tablet} {
    margin: 0 0 32px 0;
    font-size: 28px;
    line-height: 1.07;
    letter-spacing: -0.56px;
  }
`;

export const InputWrapper = styled.li`
  position: relative;

  &:focus-within {
    svg {
      opacity: 1;
    }
  }

  &:not(:last-child) {
    margin-bottom: 18px;
  }

  &:last-child {
    margin-bottom: 34px;
  }

  @media only screen and ${devices.tablet} {
    &:not(:last-child) {
      margin-bottom: 24px;
    }

    &:last-child {
      margin-bottom: 50px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 14px 12px 40px;
  background-color: transparent;
  border: 1px solid #fafafa;
  border-radius: 6px;
  color: #fafafa;
  font-size: 14px;
  line-height: normal;
  letter-spacing: -0.28px;
  outline: none;
  opacity: 0.8;
  transition: 250ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  transition-property: border, opacity;

  &::placeholder {
    color: #fafafa;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
    opacity: 0.8;
    transition: 250ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
    transition-property: opacity;
  }

  &:is(:focus-within) {
    border: 1px solid #fff;
    opacity: 1;
  }

  &:is(:focus-visible)::placeholder {
    opacity: 1;
  }

  @media only screen and ${devices.tablet} {
    padding: 16px 18px 16px 50px;
    font-size: 18px;
    letter-spacing: -0.36px;

    &::placeholder {
      font-size: 18px;
    }
  }
`;

export const StyledEmailIcon = styled(EmailIcon)`
  width: 18px;
  height: 18px;
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.8;

  @media only screen and ${devices.tablet} {
    width: 24px;
    height: 24px;
    left: 18px;
  }
`;

export const StyledPasswordIcon = styled(PasswordIcon)`
  width: 18px;
  height: 18px;
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.8;

  @media only screen and ${devices.tablet} {
    width: 24px;
    height: 24px;
    left: 18px;
  }
`;

export const Button = styled.button`
  border-radius: 6px;
  background-color: #8baa36;
  border: none;
  color: #fafafa;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.12;
  width: 100%;
  padding: 14px 0;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  transition-property: color;

  &:is(:hover, :focus-visible) {
    color: #22252a;
  }

  @media only screen and ${devices.tablet} {
    padding: 21px 0;
  }
`;

export const Hyperlink = styled(Link)`
  color: #fafafa;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;

  @media only screen and ${devices.tablet} {
    font-size: 16px;
  }
`;
