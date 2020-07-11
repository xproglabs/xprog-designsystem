import {withKnobs} from '@storybook/addon-knobs';
import React from 'react';

import Block from '../components/Block';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Components | Block',
  component: Block,
  decorators: [withKnobs, sassWrapper]
};

export const Default = () => {
  const propsBlock = {
    bgColor: 'secondary-1',
    fontColor: 'white',
    'md': {
      bgColor: 'secondary-2',
      fontColor: 'black',
    },
    'lg': {
      bgColor: 'primary-1'
    },
    'xl': {
      bgColor: 'primary-2'
    }
  };
  return (
    <Block {...propsBlock}>teste</Block>
  );
};