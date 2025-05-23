import Input from '@/ui/ux/components/common/TextField';
import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';

// Meta 설정
const meta: Meta<typeof Input> = {
  title: 'Example/TextField',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: { control: 'text' }, // 텍스트 입력을 위한 컨트롤 추가
    onChange: { action: 'changed' }, // onChange 동작을 action으로 로그
    buttonLabel: { control: 'text' }, // 버튼 레이블을 위한 컨트롤
    onButtonClick: { action: 'buttonClicked' }, // 버튼 클릭 동작을 action으로 로그
  },
};

export default meta;

// 기본 스토리
export const Default: StoryFn<typeof Input> = (args) => {
  const [value, setValue] = useState<string>(args.value || ''); // string 타입 명시
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value); // 값 변경 시 상태 업데이트
  };

  return (
    <Input
      {...args} // arg를 컴포넌트에 전달
      value={value} // 상태값 전달
      onChange={handleChange} // 상태 변경 함수 전달
    />
  );
};

Default.args = {
  label: '이름',
  value: 'ddd',
  placeholder: '이름을 입력하세요',
  bgColor: 'lightyellow',
};

// 버튼이 포함된 스토리
export const WithButton: StoryFn<typeof Input> = (args) => {
  const [value, setValue] = useState<string>(args.value || ''); // string 타입 명시
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value); // 값 변경 시 상태 업데이트
  };

  return (
    <Input
      {...args} // arg를 컴포넌트에 전달
      value={value} // 상태값 전달
      onChange={handleChange} // 상태 변경 함수 전달
    />
  );
};

WithButton.args = {
  label: '이름',
  value: 'ddd',
  placeholder: '이름을 입력하세요',
  bgColor: 'lightyellow',
  buttonLabel: '확인', // 버튼 텍스트 설정
  onButtonClick: () => alert('버튼 클릭됨!'), // 버튼 클릭 시 동작
};
