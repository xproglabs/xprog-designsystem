import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import {Tag} from '../Typography';


const Tags = props => {
  const {custom, content, onClick} = props;

  const renderTag = (tag, k) => (
    <div key={k} className='tag' onClick={() => onClick(tag)}>
      <Tag color='primary-1'>{tag}</Tag>
    </div>
  );

  const propsWrap = {align: 'row wrap', w: '100p', ...custom};
  return (
    <Block {...propsWrap}>
      {map(content, (item, k) => renderTag(item, k))}
    </Block>
  );
};

Tags.propTypes = {
  custom: PropTypes.string,
  content: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Tags;