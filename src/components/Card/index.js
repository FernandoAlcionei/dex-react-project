import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

const cretorTypes = { penciler: 'penciler', writer: 'writer' };

const getThumbnailUri = (thumbnail) => `${thumbnail.path}.${thumbnail.extension}`;

const getCreatorsName = (creators) => (
  creators
    .filter((creator) => creator.role === cretorTypes.penciler || creator.role === cretorTypes.writer)
    .map((item) => item.name)
);

const renderCreators = (creators) => (creators && creators.returned ? (
  <h3 className="creators">
    { getCreatorsName(creators.items).join(', ') }
  </h3>
) : null);

const Card = ({ comic: { id, title, thumbnail, creators } }) => {
  const comicLink = `/comics/${id}`;

  return (
    <div className="card-component" data-testid={id}>
      <Link data-testid="link-picture" to={comicLink} className="picture">
        <img className="thumbnail" src={getThumbnailUri(thumbnail)} alt={title} />
      </Link>

      <div className="comic-info">
        <Link to={comicLink}>
          <h2 className="title">
            { title }
          </h2>
        </Link>

        { renderCreators(creators) }
      </div>
    </div>
  );
};

Card.propTypes = {
  comic: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired,
    }).isRequired,
    creators: PropTypes.shape({ items: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired }).isRequired,
  }).isRequired,
};

export default Card;
