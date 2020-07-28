import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import {Teaser} from '../Teasers';

const Featured = props => {
  const {content, status} = props;
  const {items} = content;
  if(items.length === 1) {
    return (
      <Block custom='templates-featured one'>
        <Teaser 
          content={items[0]}
          hasSubjectFilled={true}
          hasSubtitle={true}
          status={status}
        />
      </Block>
    );
  }
  if(items.length === 3) {
    const propsTemplate = {custom: 'templates-featured three', md: {align: 'row between'}};
    return (
      <Block {...propsTemplate}>
        <Block custom='block-left'>
          <Teaser 
            content={items[0]}
            hasSubjectFilled={true}
            status={status}
          />
        </Block>
        <Block custom='block-right'>
          <Teaser 
            content={items[1]}
            status={status}
          />
          <Teaser 
            content={items[2]}
            status={status}
          />
        </Block>
      </Block>
    );
  }
  return null;
};
Featured.propTypes = {
  content: PropTypes.object,
  status: PropTypes.object
};
export default Featured;