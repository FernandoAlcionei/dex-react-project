import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { getClasses } from '../../lib/utils';
import './styles.scss';

const ButtonIcon = ({ onClick, icon, color, size, testid, t, className, disabled }) => {
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
  icon: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string.isRequired,
  testid: PropTypes.string,
  t: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

ButtonIcon.defaultProps = {
  icon: '',
  color: '',
  testid: 'button-icon-component',
  className: '',
  disabled: false,
};

export default withTranslation()(ButtonIcon);
