import styled from 'styled-components';
export const RegisterWrapper = styled.div`
  width: 600px;
  border: 1px solid;
  border-radius: 3px;
`;

export const RegisterFormUser = styled.form`
  padding: 15px;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const RegisterLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  font-size: 30px;
  font-weight: 700;
`;
export const RegisterInput = styled.input`
  display: flex;
  margin-left: 10px;
`;

export const RegisterButton = styled.button`
  display: flex;
  padding: 10px 20px;
  background-color: #7703fc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  width: 150px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;
