import styled from 'styled-components';

export const LoginFormWrapper = styled.form`
  width: 600px;
  border: 1px solid;
  padding: 15px;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  margin-left: auto;
  margin-right: auto;
`;
export const LoginFormLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  font-size: 30px;
  font-weight: 700;
`;
export const LoginInput = styled.input`
  display: flex;
  margin-left: 10px;
`;
export const LoginButton = styled.button`
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
