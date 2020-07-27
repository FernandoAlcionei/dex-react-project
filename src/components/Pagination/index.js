import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import './styles.scss';
import Button from '../Button/index';
import ButtonIcon from '../ButtonIcon/index';
import { convertUriParamsToObject, convertObjectToUriParams } from '../../lib/utils';

const Pagination = ({ t, totalResults, totalPages, currentPage, history }) => {
  const changePage = (page) => {
    const { location } = history;
    const params = convertUriParamsToObject(location.search);
    params.page = page;

    history.push(`${location.pathname}${convertObjectToUriParams(params)}`);
  };

  const renderButtonPagination = (page) => (
    <Button
      key={`btn-pagination-${page}`}
      onClick={() => changePage(page)}
      className={`btn-pagination ${currentPage === page ? 'btn-active' : ''}`}
      label={page}
    />
  );

  const renderButtonsPagination = () => {
    const buttons = [];
    let amountPages = 5;
    const numPageDotPrevius = 3;

    if (currentPage - numPageDotPrevius > 0) {
      buttons.push(renderButtonPagination(1));

      buttons.push((
        <Button
          key="btn-previus"
          onClick={() => {}}
          label="..."
          disabled
          className="btn-dots"
        />
      ));
    }

    for (let i = (currentPage - 2); i < currentPage; i++) {
      if (i > 0) {
        amountPages -= 1;
        buttons.push(renderButtonPagination(i));
      }
    }

    for (let i = currentPage; i < (currentPage + amountPages); i++) {
      if (i <= totalPages) {
        buttons.push(renderButtonPagination(i));
      }
    }

    if (currentPage + amountPages < totalPages) {
      buttons.push((
        <Button
          key="btn-next"
          onClick={() => {}}
          label="..."
          disabled
          className="btn-dots"
        />
      ));

      buttons.push(renderButtonPagination(totalPages));
    }

    return buttons;
  };

  return (
    <div className="pagination-component">
      <span className="total-results">
        {t('Total results')}: { totalResults }
      </span>

      <div className="wrap-pagination">
        <ButtonIcon
          onClick={() => changePage(currentPage - 1)}
          className="btn-pagination"
          icon="chevron-left"
          size="20px"
          disabled={currentPage === 1}
        />

        { renderButtonsPagination() }

        <ButtonIcon
          onClick={() => changePage(currentPage + 1)}
          className="btn-pagination"
          icon="chevron-right"
          size="20px"
          disabled={currentPage === totalPages}
        />
      </div>

      <div className="empty-col" />
    </div>
  );
};

Pagination.propTypes = {
  history: PropTypes.object.isRequired,
  totalResults: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Pagination);
