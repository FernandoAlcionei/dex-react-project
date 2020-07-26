import React from 'react';
import './styles.scss';
import { PropTypes } from 'prop-types';
import ButtonIcon from '../ButtonIcon';
import { getClasses } from '../../lib/utils';

export const alertTypes = {
  error: 'error',
  success: 'success',
};

const Alert = ({ alert, alert: { id, timeout }, remove }) => {
  setTimeout(() => remove(id), timeout);

  return (
    <div data-testid={alert.id} className={getClasses(['alert-component', alert.type])}>
      <span>
        { alert.title }
      </span>

      <ButtonIcon testid="close-alert" onClick={() => remove(alert.id)} icon="close" color="#FFF" size="14px" />
    </div>
  );
};

Alert.propTypes = {
  remove: PropTypes.func.isRequired,
  alert: PropTypes.shape({
    id: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    timeout: PropTypes.number.isRequired,
  }).isRequired,
};

export default Alert;
