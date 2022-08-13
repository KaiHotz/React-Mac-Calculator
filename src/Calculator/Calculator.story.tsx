import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import { Calculator } from './Calculator';

export default {
  title: 'Calculator',
  component: Calculator,
} as Meta;

export const Default: FC = () => {
  return <Calculator />;
};
