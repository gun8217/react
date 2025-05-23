import { StyledInput, StyledRadioLabel } from '@/ui/styled/common_styled'; // styles.ts에서 가져오기
import React from 'react';

interface RadioProps {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const Radio: React.FC<RadioProps> = ({
  label,
  name,
  value,
  checked,
  onChange,
  disabled = false,
}) => {
  return (
    <StyledRadioLabel disabled={disabled}>
      <StyledInput
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      {label}
    </StyledRadioLabel>
  );
};

export default Radio;
