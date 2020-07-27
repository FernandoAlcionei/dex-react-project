import React from 'react';
import { PropTypes } from 'prop-types';
import { withTranslation } from 'react-i18next';
import Input from '../Input';
import ButtonIcon from '../ButtonIcon';
import './styles.scss';

const Search = ({ onClick, value, onChangeValue, t }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    onClick();
  };

  return (
    <div data-testid="search-component" className="search-component">
      <form onSubmit={onSubmit} className="search-form">
        <Input
          testid="search-input"
          value={value}
          onChange={(text) => onChangeValue(text)}
          placeholder={t('Pesquisar personagem')}
        />

        <ButtonIcon testid="search-btn" onClick={() => onClick()} icon="search" size="18px" />
      </form>
    </div>
  );
};

Search.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Search);
