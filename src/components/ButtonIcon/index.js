import React from 'react';
import PropTypes from 'prop-types';
import { getClasses } from '../../lib/utils';
import './styles.scss';

const ButtonIcon = ({ onClick, icon, color, size, testid, className, disabled }) => {
  const getIconStyle = () => ({ width: size, height: size, backgroundColor: color });

  return (
    <button
      data-testid={testid}
      type="button"
      className={getClasses(['btn-icon-component', className])}
      onClick={onClick}
      disabled={disabled}
    >
      <i data-testid="icon-svg" className={getClasses(['icon-svg', icon])} style={getIconStyle()} />
    </button>
  );
};

ButtonIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string.isRequired,
  testid: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

ButtonIcon.defaultProps = {
  color: '',
  testid: 'button-icon-component',
  className: '',
  disabled: false,
};

export default ButtonIcon;
