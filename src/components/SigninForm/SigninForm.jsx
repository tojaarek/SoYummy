import {
  Container,
  Form,
  FormHeadline,
  InputWrapper,
  Input,
  StyledEmailIcon,
  StyledPasswordIcon,
  Button,
  Hyperlink,
} from './SigninForm.styled';
import { useDispatch } from 'react-redux';
import { signIn } from 'redux/actions/users.actions';

const SigninForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      signIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };
  return (
    <Container>
      <Form name="signinForm" autoComplete="off" onSubmit={handleSubmit}>
        <div role="group" aria-labelledby="signinForm-head">
          <FormHeadline id="signinForm-head">Sign in</FormHeadline>
          <ul>
            <InputWrapper>
              <Input type="email" placeholder="Email" name="email" />
              <StyledEmailIcon />
            </InputWrapper>
            <InputWrapper>
              <Input type="password" placeholder="Password" name="password" />
              <StyledPasswordIcon />
            </InputWrapper>
          </ul>
        </div>
        <Button type="submit">Sing in</Button>
      </Form>
      <Hyperlink to="/register">Registration</Hyperlink>
    </Container>
  );
};

export default SigninForm;
