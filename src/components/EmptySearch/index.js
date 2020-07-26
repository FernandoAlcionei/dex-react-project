import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';
import { withTranslation } from 'react-i18next';

const EmptySearch = ({ t }) => (
  <div data-testid="empty-search-component" className="empty-search-component">
    <div>
      <span className="message">
        {t('Não foi encontrado nenhum quadrinho que coincida com a sua busca')}
      </span>

      <ul className="tips">
        <li>
          {t('Revise a ortografia da palavra')}
        </li>
      </ul>
    </div>
  </div>
);

EmptySearch.propTypes = { t: PropTypes.func.isRequired };

export default withTranslation()(EmptySearch);
