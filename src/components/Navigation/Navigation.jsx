import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import styled from 'styled-components';
import { NavigationWrapper } from './Navigation.styled';
const StyledLink = styled(NavLink)`
  display: flex;
  margin-left: auto;
  font-size: 30px;
  color: #35066b;
  font-weight: 20px;
  text-decoration: none;
  font-weight: 700;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #7703fc;
  }
  &:focus {
    color: #7703fc;
  }
`;
const StyledLinkContacts = styled(NavLink)`
  display: flex;
  font-size: 30px;
  color: #35066b;
  text-decoration: none;
  font-weight: 700;
  &:hover {
    color: #7703fc;
  }
  &:focus {
    color: #7703fc;
  }
`;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationWrapper>
      <StyledLink to="/">PhoneBook</StyledLink>
      {isLoggedIn && (
        <StyledLinkContacts to="/contacts">Contacts</StyledLinkContacts>
      )}
    </NavigationWrapper>
  );
};
