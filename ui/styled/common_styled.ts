import styled from 'styled-components';

// Flex
export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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
  &:disabled {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

// input
export const StyledLabel = styled.label`
  display: block;
  font-weight: bold;
`;
export interface TextFieldProps {
  bgColor?: string;
}
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

// radio
export const StyledRadioLabel = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  margin: 4px 0;
  user-select: none;
  color: ${({ disabled }) => (disabled ? '#aaa' : 'inherit')};
`;
export const StyledInput = styled.input`
  margin-right: 8px;
`;
