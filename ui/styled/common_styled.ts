import styled from 'styled-components';

// 사용자 정의 prop을 받을 수 있도록 타입을 지정
export interface TextFieldProps {
  bgColor?: string;
}

// Flex
export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

// Input label
export const StyledLabel = styled.label`
  display: block;
  font-weight: bold;
`;

// input
export const TextField = styled.input<TextFieldProps>`
  padding: 8px 10px;
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

// button
export const StyledButton = styled.button`
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    background-color: #0056b3;
  }
`;
