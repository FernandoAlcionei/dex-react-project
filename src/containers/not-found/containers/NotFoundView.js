import React from 'react';
import { PropTypes } from 'prop-types';
import { withTranslation } from 'react-i18next';
import './styles.scss';

const NotFoundView = ({ t }) => (
  <div data-testid="not-found-view" className="not-found-view">
    <span className="status">
      404
    </span>

    <span className="message">
      { t('Page not found') }
    </span>
  </div>
);

NotFoundView.propTypes = { t: PropTypes.func.isRequired };

export default withTranslation()(NotFoundView);
