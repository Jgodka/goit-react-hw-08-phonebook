import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import {
  LoginFormWrapper,
  LoginButton,
  LoginFormLabel,
  LoginInput,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginFormWrapper onSubmit={handleSubmit} autoComplete="off">
      <LoginFormLabel>
        Email
        <LoginInput type="email" name="email" />
      </LoginFormLabel>
      <LoginFormLabel>
        Password
        <LoginInput type="password" name="password" />
      </LoginFormLabel>
      <LoginButton type="submit">Log In</LoginButton>
    </LoginFormWrapper>
  );
};
