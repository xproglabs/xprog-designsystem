import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';

const SideMenu = ({children, functions, status}) => {
  const menuIsOpen = status.opened ? 'opened' : 'closed';
  return (
    <Block custom={`xp-menu-modal ${menuIsOpen}`}>
      <Block 
        custom="xp-menu-opacity" 
        functions={{handleClick: functions.onCloseModal}}>
      </Block>
      <Block 
        p="md"
        custom="xp-menu-left" 
        bgColor="white">
        {children && children}
      </Block>
    </Block>
  );
};

SideMenu.propTypes = {
  children: PropTypes.node,
  content: PropTypes.object.isRequired,
  functions: PropTypes.shape({
    onCloseModal: PropTypes.func
  }),
  status: PropTypes.shape({
    opened: PropTypes.bool
  })
};
SideMenu.defaultProps = {
  content: {},
  functions: {
    onCloseModal: () => null
  },
  status: {
    opened: false
  }
};
export default SideMenu;