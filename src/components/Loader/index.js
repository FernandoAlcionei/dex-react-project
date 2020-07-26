import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Loader = ({ show }) => (show ? (
  <div data-testid="loader-component" className="loader-component">
    <i className="icon-svg loading" />
  </div>
) : null);

Loader.propTypes = { show: PropTypes.bool };

Loader.defaultProps = { show: false };

export default Loader;
