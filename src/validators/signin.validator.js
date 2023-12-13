import { object, string } from 'yup';

const loginSchema = object({
  email: string().email('Invalid email address').required('Email is required'),
  password: string().required('Password is required'),
});

export default loginSchema;
