import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, {useEffect} from 'react';

import colors from '../../styles/variables/colors.json';
import weights from '../../styles/variables/weight.json';
import {ButtonTypography} from '../Typography';

const Button = ({
  children,
  className,
  color,
  disabled,
  fontColor,
  fullWidth,
  leftIcon,
  onClick,
  radius,
  rightIcon,
  size,
  style,
  variant,
  weight,
  loading,
  enterKey
}) => {

  const handleKeyPress = event => {
    if (event.keyCode === 13) enterKey();
  };

  useEffect(() => {
    enterKey && window.addEventListener('keydown', handleKeyPress);
    return () => {
      enterKey && window.removeEventListener('keydown', handleKeyPress);
    };
  });

  const getClass = classnames({
    'Prensa-Button-root': true,
    [`size-${size} ${variant} color-${color} radius-${radius}`]: true,
    'disabled': disabled,
    'fullWidth': fullWidth,
    'has-leftIcon': leftIcon,
    'has-rightIcon': rightIcon,
    [`${className}`]: className,
  });

  const getFontColor = () => {     
    if (fontColor) return fontColor;
    if (variant === 'outlined') {
      if (disabled) return 'neutral-8';
      return color; 
    }
    return 'white';
  };

  const getChildren = () => {
    if (loading) return 'Carregando...';
    return (
      <React.Fragment>
        {leftIcon && leftIcon}
        {children}
        {rightIcon && rightIcon}
      </React.Fragment>
    );
  };

  return (
    <button
      className={getClass}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      style={style}
    >
      <ButtonTypography color={getFontColor()} weight={weight}>
        {getChildren()}
      </ButtonTypography>
    </button>
  );
};

Button.propTypes = {
  /**
   * Permite a estilização do componente
   */
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  leftIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.element]),
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['filled', 'outlined']),
  color: PropTypes.oneOf(colors),
  fontColor: PropTypes.oneOf(colors),
  radius: PropTypes.oneOf([false, 'default', 'alternative']),
  rightIcon: PropTypes.oneOf([PropTypes.object, PropTypes.element]),
  size: PropTypes.oneOf([1, 2, 3, 4, 5]),
  style: PropTypes.object,
  weight: PropTypes.oneOf(weights),
  loading: PropTypes.bool,
  enterKey: PropTypes.func
};

Button.defaultProps = {
  disabled: false,
  variant: 'filled',
  color: 'primary-1',
  radius: 'default',
  size: 1,
  weight: 'regular',
  loading: false
};

export default Button;