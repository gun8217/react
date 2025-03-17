import styled from 'styled-components';

// 사용자 정의 prop을 받을 수 있도록 타입을 지정
export interface TextFieldProps {
  bgColor?: string;
}

// TextField 스타일 정의
export const TextField = styled.input<TextFieldProps>`
  padding: 10px;
  font-size: 16px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #ccc;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  background-color: ${(props) => props.bgColor || 'white'};
`;

// Input label 스타일 정의
export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const StyledButton = styled.button`
  padding: 8px 12px;
  margin-left: 8px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
