import React from 'react';
import { PropTypes } from 'prop-types';
import { withTranslation } from 'react-i18next';
import Button from '../../../../components/Button';
import './styles.scss';

const getImageUri = (image) => `${image.path}.${image.extension}`;

const getCreatorsName = (creators) => creators.items.map((item) => item.name);

const renderCreators = (creators) => (creators && creators.returned ? (
  <h3 className="creators">
    Autores: { getCreatorsName(creators).join(', ') }
  </h3>
) : null);

const Comic = ({ comic, buy, t }) => (
  <div className="comic-component">
    <div className="wrap-comic-info">
      <div className="wrap-comic-img">
        <img className="comic-img" src={getImageUri(comic.images[0])} alt={comic.title} />
      </div>

      <div className="comic-info">
        <span className="sold-quantity">
          { comic.condition } - { comic.sold_quantity } {t('vendidos')}
        </span>

        <h2 className="title">
          { comic.title }
        </h2>

        <div>
          { renderCreators(comic.creators) }
        </div>

        <Button className="buy-btn" onClick={() => buy()} label={t('comprar')} />
      </div>
    </div>

    <div className="wrap-descriptions">
      <span className="description-label">
        {t('Descrição')}
      </span>

      <p className="description">
        { comic.description }
      </p>
    </div>
  </div>
);

Comic.propTypes = {
  buy: PropTypes.func.isRequired,
  comic: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Comic);
