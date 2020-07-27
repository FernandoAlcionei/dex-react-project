import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { getClasses } from '../../lib/utils';

const Loader = ({ show, className }) => (show ? (
  <div data-testid="loader-component" className={getClasses(['loader-component', className])}>
    <i className="icon-svg loading" />
  </div>
) : null);

Loader.propTypes = {
  show: PropTypes.bool,
  className: PropTypes.string,
};

Loader.defaultProps = {
  show: false,
  className: '',
};

export default Loader;
