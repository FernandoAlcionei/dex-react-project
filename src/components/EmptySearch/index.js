import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';
import { withTranslation } from 'react-i18next';

const EmptySearch = ({ t }) => (
  <div data-testid="empty-search-component" className="empty-search-component">
    <div className="wrap-message">
      <span className="message">
        {t('No results found matching your search')}
      </span>

      <ul className="tips">
        <li>
          {t('Check the spelling of the word')}
        </li>
      </ul>
    </div>
  </div>
);

EmptySearch.propTypes = { t: PropTypes.func.isRequired };

export default withTranslation()(EmptySearch);
