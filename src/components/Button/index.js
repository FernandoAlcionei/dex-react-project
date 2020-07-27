import React from 'react';
import PropTypes from 'prop-types';
import { getClasses } from '../../lib/utils';
import './styles.scss';

const Button = ({ label, onClick, btnType, className, disable }) => (
  <button
    data-testid="button-component"
    disabled={disable}
    type="button"
    className={getClasses(['btn-component', btnType, className])}
    onClick={onClick}
  >
    { label }
  </button>
);

Button.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  btnType: PropTypes.string,
  disable: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  btnType: 'btn-primary',
  disable: false,
  onClick: () => {},
};

export default Button;
