import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Block = (props) => {
  const {
    alignBetween,
    alignBottom,
    alignCenter,
    alignEvenly,
    alignLeft,
    alignMiddle,
    alignRight,
    alignTop,
    bgColor,
    custom,    
    fColor,
    fitH,
    fitW,
    m,
    mb,
    ml,
    mr,
    mt,
    p,
    pb,
    pl,
    pr,
    pt,
    row,
    height,
    width,
    style,
    onClick
  } = props;

  const getStyle = () => {
    switch(style) {
      case 'article':
        return 'article';
      case '3-col':
        return 'block-three-col';
      case '4-col':
        return 'block-four-col';
      default:
        return '';
    }
  };

  const classes = classnames({
    'ds-block': true,
    'fx-align-between': !row && alignBetween,
    'fx-align-bottom': !row && alignBottom,
    'fx-align-center': !row && alignCenter,
    'fx-align-evenly': !row && alignEvenly,
    'fx-align-left': !row && alignLeft,
    'fx-align-middle': !row && alignMiddle,
    'fx-align-right': !row && alignRight,
    'fx-align-top': !row && alignTop,
    'fy-align-between': row && alignBetween,
    'fy-align-bottom': row && alignBottom,
    'fy-align-center': row && alignCenter,
    'fy-align-evenly': row && alignEvenly,
    'fy-align-left': row && alignLeft,
    'fy-align-middle': row && alignMiddle,
    'fy-align-right': row && alignRight,
    'fy-align-top': row && alignTop,
    'fx-dir-col': !row,
    'fx-dir-row': row,
    'fx-fit-h': fitH,
    'fx-fit-w': fitW,
    [`bg-${bgColor}`]: bgColor,
    [`f-${fColor}`]: fColor,
    [`h-${height}`]: height,
    [`m-${m}`]: m,
    [`mb-${mb}`]: mb,
    [`ml-${ml}`]: ml,
    [`mr-${mr}`]: mr,
    [`mt-${mt}`]: mt,
    [`p-${p}`]: p,
    [`pb-${pb}`]: pb,
    [`pl-${pl}`]: pl,
    [`pr-${pr}`]: pr,
    [`pt-${pt}`]: pt,
    [`w-${width}`]: width,
    [`${custom}`]: custom
  });

  return (
    <div className={classnames(classes, getStyle())} onClick={onClick}>
      {props.children && props.children}
    </div>
  );
};

Block.propTypes = {
  alignBetween: PropTypes.bool,
  alignBottom: PropTypes.bool,
  alignCenter: PropTypes.bool,
  alignEvenly: PropTypes.bool,
  alignLeft: PropTypes.bool,
  alignMiddle: PropTypes.bool,
  alignRight: PropTypes.bool,
  alignTop: PropTypes.bool,
  bgColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.node
  ]),
  custom: PropTypes.string, 
  fColor: PropTypes.string,
  fitH: PropTypes.bool,
  fitW: PropTypes.bool,
  m: PropTypes.oneOf([
    null, 'xs', 'sm', 'md', 'lg', 'xl'
  ]),
  mb: PropTypes.oneOf([
    null, 'xs', 'sm', 'md', 'lg', 'xl'
  ]),
  ml: PropTypes.oneOf([
    null, 'xs', 'sm', 'md', 'lg', 'xl'
  ]),
  mr: PropTypes.oneOf([
    null, 'xs', 'sm', 'md', 'lg', 'xl'
  ]),
  mt: PropTypes.oneOf([
    null, 'xs', 'sm', 'md', 'lg', 'xl'
  ]),
  p: PropTypes.oneOf([
    null, 'xs', 'sm', 'md', 'lg', 'xl'
  ]),
  pb: PropTypes.oneOf([
    null, 'xs', 'sm', 'md', 'lg', 'xl'
  ]),
  pl: PropTypes.oneOf([
    null, 'xs', 'sm', 'md', 'lg', 'xl'
  ]),
  pr: PropTypes.oneOf([
    null, 'xs', 'sm', 'md', 'lg', 'xl'
  ]),
  pt: PropTypes.oneOf([
    null, 'xs', 'sm', 'md', 'lg', 'xl'
  ]),
  row: PropTypes.bool,
  height: PropTypes.oneOf([
    'xs', 'sm', 'md', 'lg', 'xl', 'full'
  ]),
  width: PropTypes.oneOf([
    'xs', 'sm', 'md', 'lg', 'xl', 'full'
  ]),
  style: PropTypes.oneOf([
    'article', '3-col', '4-col'
  ]),
  onClick: PropTypes.func,
};

Block.defaultProps = {
  p: null
};

export default Block;