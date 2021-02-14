import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Teaser from '../Teasers';
import colors from '../../styles/variables/colors.json'

const Related = ({items, domain, lazy, ReadMore, status, theme}) => {
  const activeColor = theme.colors.deprecatedActiveColor;
  const propsContainer = {custom: 'templates-related-news', align: 'col left', w: '100p'};
  return (
    <Block {...propsContainer}>
      <Block custom="related-news" w="100p">
        {map(items, (item, key) => 
          <Teaser 
            content={item} 
            domain={domain}
            hasSubjectFilled={true} 
            hasImageTop={false}
            key={key} 
            lazy={lazy}
            status={status}
            subjectSize={2}
            subjectColor={activeColor}
            titleSize={3}
            titleColor='neutral-2'
            dateColor='neutral-2'
            titleWeight='bold'
          />
        )}
      </Block>
      {ReadMore && <ReadMore />}
    </Block>
  );
};

Related.propTypes = {
  domain: PropTypes.string,
  items: PropTypes.array,
  lazy: PropTypes.func,
  ReadMore: PropTypes.func,
  status: PropTypes.shape({
    error: PropTypes.bool,
    loading: PropTypes.bool
  }),
  theme: PropTypes.shape({
    activeColor: PropTypes.oneOf(colors)
  })
};

export default Related;