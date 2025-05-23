import Button from '@/ui/ux/components/common/Button';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

// 스토리북 메타 정보
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' },
    type: {
      control: 'radio',
      options: ['button', 'submit', 'reset'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;

// 기본 버튼 스토리 (명확한 타입 핸들러 포함)
export const Default: StoryFn<typeof Button> = (args) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert('버튼 클릭됨!');
    if (args.onClick) args.onClick(e);
  };

  return <Button {...args} onClick={handleClick} />;
};

Default.args = {
  label: '클릭하세요',
  type: 'button',
  disabled: false,
};

// 비활성화 버튼 스토리
export const Disabled: StoryFn<typeof Button> = (args) => <Button {...args} />;

Disabled.args = {
  label: '비활성화됨',
  disabled: true,
};
