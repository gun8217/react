import { Flex } from '@/ui/styled/common_styled'; // styles.ts에서 가져오기
import Radio from '@/ui/ux/components/common/Radio';
import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';

const meta: Meta<typeof Radio> = {
  title: 'Example/RadioGroup',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;

export const Default: StoryFn<typeof Radio> = (args) => {
  const [checked, setChecked] = useState(args.checked || false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    if (args.onChange) args.onChange(e);
  };

  return <Radio {...args} checked={checked} onChange={handleChange} />;
};

Default.args = {
  label: '라디오 옵션 1',
  name: 'example',
  value: 'option1',
  checked: false,
  disabled: false,
};

export const GroupedRadios: StoryFn = (args) => {
  const [selectedValue, setSelectedValue] = useState('option1');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
    if (args.onChange) args.onChange(e);
  };

  return (
    <Flex>
      <Radio
        label="옵션 1"
        name="group1"
        value="option1"
        checked={selectedValue === 'option1'}
        onChange={handleChange}
      />
      <Radio
        label="옵션 2"
        name="group1"
        value="option2"
        checked={selectedValue === 'option2'}
        onChange={handleChange}
        disabled={true}
      />
      <Radio
        label="옵션 3"
        name="group1"
        value="option3"
        checked={selectedValue === 'option3'}
        onChange={handleChange}
        disabled={false}
      />
    </Flex>
  );
};
