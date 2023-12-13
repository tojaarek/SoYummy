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
import loginSchema from 'validators/signin.validator';
import { toast } from 'react-toastify';
import { signIn } from 'redux/actions/users.actions';

const SigninForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    try {
      await loginSchema.validate(data);
      dispatch(signIn(data));
    } catch (validationError) {
      toast.error(validationError.errors.join(', '), {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    form.reset();
  };
  return (
    <Container>
      <Form name="signinForm" autoComplete="off" onSubmit={handleSubmit}>
        <div role="group" aria-labelledby="signinForm-head">
          <FormHeadline id="signinForm-head">Sign in</FormHeadline>
          <ul>
            <InputWrapper>
              <Input type="email" placeholder="Email" name="email" required />
              <StyledEmailIcon />
            </InputWrapper>
            <InputWrapper>
              <Input
                type="password"
                placeholder="Password"
                name="password"
                required
              />
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
