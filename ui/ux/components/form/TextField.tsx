import React from 'react';
import {
  TextField,
  StyledLabel,
  StyledButton,
} from '@/ui/styled/common_styled'; // styles.ts에서 가져오기

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
    <div>
      <StyledLabel>{label}</StyledLabel>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          bgColor={bgColor}
        />
        {buttonLabel && onButtonClick && (
          <StyledButton onClick={onButtonClick}>{buttonLabel}</StyledButton>
        )}
      </div>
    </div>
  );
};

export default Input;
