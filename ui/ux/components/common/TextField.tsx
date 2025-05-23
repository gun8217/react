import {
  Flex,
  StyledButton,
  StyledLabel,
  TextField,
} from '@/ui/styled/common_styled'; // styles.ts에서 가져오기
import React from 'react';

interface InputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  bgColor?: string;
  buttonLabel?: string; // 버튼 텍스트
  onButtonClick?: () => void; // 버튼 클릭 핸들러
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  bgColor,
  buttonLabel,
  onButtonClick,
}) => {
  return (
    <Flex>
      <StyledLabel>{label}</StyledLabel>
      <Flex>
        <TextField
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          bgColor={bgColor}
        />
        {buttonLabel && onButtonClick && (
          <StyledButton onClick={onButtonClick}>{buttonLabel}</StyledButton>
        )}
      </Flex>
    </Flex>
  );
};

export default Input;
