import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Input = ({ testid, onChange, value, type, placeholder, required, disabled }) => (
  <div data-testid="input-component" className="input-component">
    <input
      data-testid={testid}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="input-field"
      placeholder={placeholder}
      required={required}
      disabled={disabled}
    />
  </div>
);

Input.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  testid: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  required: false,
  disabled: false,
  testid: 'input-field',
};

export default Input;
