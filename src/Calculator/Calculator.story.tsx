import React, { FC } from 'react';
import { Calculator } from './Calculator';

export default {
  title: 'Calculator',
  component: Calculator,
};

export const Default: FC = () => {
  return <Calculator />;
};
