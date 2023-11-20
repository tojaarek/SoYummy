import { useDispatch } from 'react-redux';
import { register } from 'redux/actions/users.actions';
import {
  Container,
  Form,
  FormHeadline,
  InputWrapper,
  Input,
  Button,
  Hyperlink,
  Notice,
  StyledUserIcon,
  StyledEmailIcon,
  StyledPasswordIcon,
} from './RegisterForm.styled';
import { useEffect, useState } from 'react';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [isNameValid, setIsNameValid] = useState('');
  const [isEmailValid, setIsEmailValid] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState('');
  const [nameNotice, setNameNotice] = useState('');
  const [emailNotice, setEmailNotice] = useState('');
  const [passwordNotice, setPasswordNotice] = useState('');

  useEffect(() => {}, [isNameValid, isEmailValid, isPasswordValid]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  const verifyName = event => {
    const { value } = event.target;
    if (value.length < 3) {
      setIsNameValid('false');
      setNameNotice('Minimum 3 characters');
    } else if (value.length > 50) {
      setIsNameValid('false');
      setNameNotice('Maximum 50 characters');
    } else if (value.length === 0) {
      setIsNameValid('false');
      setNameNotice('Name is required');
    } else if (/[^A-Za-z0-9]/.test(value)) {
      setIsNameValid('false');
      setNameNotice('Letters and numbers only');
    } else {
      setIsNameValid('true');
    }
  };

  const verifyEmail = event => {
    const { value } = event.currentTarget;
    if (value.length === 0) {
      setIsEmailValid('false');
      setEmailNotice('Email is required');
    } else if (!value.includes('@')) {
      setIsEmailValid('false');
      setEmailNotice('Invalid email address');
    } else {
      setIsEmailValid('true');
    }
  };

  const verifyPassword = event => {
    const { value } = event.currentTarget;
    if (value.length === 0) {
      setIsPasswordValid('false');
      setPasswordNotice('Password is required');
    } else if (value.lenght < 6) {
      setIsPasswordValid('false');
      setPasswordNotice('Minimum 6 characters');
    } else if (value.lenght > 60) {
      setIsPasswordValid('false');
      setPasswordNotice('Maximum 60 characters');
    } else if (!/[A-Z]/.test(value) || !/\d/.test(value)) {
      setIsPasswordValid('false');
      setPasswordNotice('At least one uppercase letter and one digit');
    } else {
      setIsPasswordValid('true');
    }
  };

  return (
    <Container>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <div role="group" aria-labelledby="register-head">
          <FormHeadline id="register-head">Registration</FormHeadline>
          <ul>
            <InputWrapper>
              <Input
                type="text"
                placeholder="Name"
                name="name"
                required
                onChange={verifyName}
                isvalid={isNameValid}
              />
              <StyledUserIcon isvalid={isNameValid} />
              <Notice isvalid={isNameValid}>{nameNotice}</Notice>
            </InputWrapper>
            <InputWrapper>
              <Input
                type="email"
                placeholder="Email"
                name="email"
                required
                onChange={verifyEmail}
                isvalid={isEmailValid}
              ></Input>
              <StyledEmailIcon isvalid={isEmailValid} />
              <Notice isvalid={isEmailValid}>{emailNotice}</Notice>
            </InputWrapper>
            <InputWrapper>
              <Input
                type="password"
                placeholder="Password"
                name="password"
                required
                onChange={verifyPassword}
                isvalid={isPasswordValid}
              ></Input>
              <StyledPasswordIcon isvalid={isPasswordValid} />
              <Notice isvalid={isPasswordValid}>{passwordNotice}</Notice>
            </InputWrapper>
          </ul>
        </div>
        <Button
          disabled={
            isNameValid === 'false' ||
            isEmailValid === 'false' ||
            isPasswordValid === 'false' ||
            isNameValid === '' ||
            isEmailValid === '' ||
            isPasswordValid === ''
          }
          type="submit"
        >
          Sing up
        </Button>
      </Form>
      <Hyperlink to="/signin">Sign in</Hyperlink>
    </Container>
  );
};

export default RegisterForm;
