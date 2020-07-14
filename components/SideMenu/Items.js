import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';

const SideMenuItems = ({content, functions}) => {

  const Item = ({item}) => {
    const hasSubitems = item.subitems.length > 0; 
    return (
      <Block custom="listitem" mt="4">
        <Block custom="item" onClick={functions.onMenuItem} >
          {!hasSubitems ? 
            <a href={item.path}>{item.name}</a> :
            <span href={item.path}>{item.name}</span>}
        </Block>
      </Block>
    );
  };
  Item.propTypes = {
    item: PropTypes.object
  };
  return (
    <Block custom='menu-left-items'>
      {map(content.items, (item, key) => 
        <Item item={item} key={key} />)}
    </Block>
  );
};

SideMenuItems.propTypes = {
  content: PropTypes.object,
  functions: PropTypes.shape({
    onMenuItem: PropTypes.func
  })
};
SideMenuItems.defaultProps = {
  content: {}
};
export default SideMenuItems;