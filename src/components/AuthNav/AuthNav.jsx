import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AuthNavLink } from './AuthNav.styled';

const StyledLink = styled(NavLink)`
  display: flex;
  margin-left: auto;
  font-size: 30px;
  color: #35066b;
  font-weight: 20px;
  text-decoration: none;
  font-weight: 700;

  &:hover {
    color: #7703fc;
  }
  &:focus {
    color: #7703fc;
  }
`;

export default function AuthNav() {
  return (
    <AuthNavLink>
      <StyledLink to="register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </AuthNavLink>
  );
}
