import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { RegisterWrapper } from './Register.styled';
export default function Register() {
  return (
    <RegisterWrapper>
      <title>Registration</title>

      <RegisterForm />
    </RegisterWrapper>
  );
}
