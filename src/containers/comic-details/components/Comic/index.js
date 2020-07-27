import React from 'react';
import { PropTypes } from 'prop-types';
import { withTranslation } from 'react-i18next';
import './styles.scss';

const getImageUri = (image) => `${image.path}.${image.extension}`;

const renderCreators = (creators) => (creators && creators.returned ? (
  creators.items.map((item) => (
    <div className="creator">
      <b> {item.role}: </b>
      <span> {item.name} </span>
    </div>
  ))
) : null);

const Comic = ({ comic, t }) => (
  <div className="comic-component">
    <div className="wrap-comic-img">
      <img className="comic-img" src={getImageUri(comic.images[0])} alt={comic.title} />
    </div>

    <div className="comic-info">
      <h2 className="title">
        { comic.title }
      </h2>

      <div className="creators">
        { renderCreators(comic.creators) }
      </div>

      <div className="wrap-descriptions">
        <span className="description-label">
          {t('Description')}
        </span>

        <p className="description">
          { comic.description }
        </p>
      </div>
    </div>
  </div>
);

Comic.propTypes = {
  comic: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Comic);
