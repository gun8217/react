// components/common/Button.tsx
import { StyledButton } from '@/ui/styled/common_styled';
import React from 'react';

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; // 이벤트 인자 추가
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  disabled = false,
}) => {
  return (
    <StyledButton onClick={onClick} type={type} disabled={disabled}>
      {label}
    </StyledButton>
  );
};

export default Button;
